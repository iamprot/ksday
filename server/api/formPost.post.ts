export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event);

        if (body.honeypot.trim() !== "") {
            console.log("бот");
            return;
        }

        console.log(body);

        return;
    } catch (error) {
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
