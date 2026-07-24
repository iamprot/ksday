export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event);

        if (body.honeypot.trim() !== "") {
            console.log("бот");
            return;
        }

        const config = useRuntimeConfig();
        const token = config.yandexFormsToken;
        const formId = config.yandexFormId;

        const yandexApiUrl = `https://api.forms.yandex.net/v1/surveys/${formId}/form`;

        const yandexPayload = {
                "answer_short_text_9008984161690764": body.name,
                "answer_short_text_9008984161703324": body.company,
                // ksJobTitle: body.status,
                // ksEmail: body.email,
        };

        const response = await $fetch(yandexApiUrl, {
            method: "POST",
            headers: {
                // Host: `api.forms.yandex.net`,
                Authorization: `OAuth ${token}`,
                // "X-Org-Id": `asldkasd`
                "Content-Type": "application/json",
            },
            body: yandexPayload,
        });

        console.log(response)
    
        return {
            success: true,
            message: "Заявка успешно отправлена",
            data: response,
        };

    } catch (error: any) {
        console.log(error);

        if (error) {
            throw error;
        }

        throw createError({
            statusCode: 500,
            message: "Ошибка при обработке заявки",
        });
    }
});
