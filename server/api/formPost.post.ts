export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event);

        if (body.honeypot.trim() !== "") {
            console.log("бот");
            return;
        }

        const config = useRuntimeConfig();
        const token = config.yandexUserToken;
        const formId = config.yandexFormId;
        const orgId = config.yandexOrgId;

        const yandexApiUrl = `https://api.forms.yandex.net/v1/surveys/${formId}/form`;

        const yandexPayload = {
                "answer_short_text_9008984237583412": body.fullName,
                "answer_short_text_9008984237603772": body.company,
                "answer_short_text_9008984237631278": body.jobTitle,
                "answer_short_text_9008984237648854": body.email,
        };

        const response = await $fetch(yandexApiUrl, {
            method: "POST",
            headers: {
                Authorization: `OAuth ${token}`,
                'X-Org-Id': orgId,
                'Content-Type': 'application/json',
            },
            body: yandexPayload,
        });

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
