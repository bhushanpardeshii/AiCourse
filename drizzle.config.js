/**@type {import ("drizzle-kit").Config}*/
export default {
    schema: "./configs/schema.jsx",
    dialect: 'postgresql',
    dbCredentials: {
        url: "postgresql://Course_owner:wvrs17EguSMI@ep-shy-waterfall-a5b2cj21.us-east-2.aws.neon.tech/CourseGenerator?sslmode=require"
    }
}