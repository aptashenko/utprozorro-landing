export const pause = ms => new Promise(resolve => setTimeout(resolve, ms));

export default async ({array, callback, delay}) => {
    for (let item of array) {
        await pause(delay);
        callback(item);
    }
}
