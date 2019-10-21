const env = process.env;

export const nodeEnv = env.NODE_ENV || 'developemt';

export default {
    port: env.PORT || 8080
};