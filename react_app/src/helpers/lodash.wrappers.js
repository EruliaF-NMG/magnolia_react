import lodashGet from 'lodash.get';

/**
 * Lodash get() wrapper
 * @param (Object) object
 * @param (Array|string) path
 * @param (*) defaultValue
 */
export const _get = (object, path, defaultValue) => {
    return lodashGet(object, path, defaultValue);
};



export const getData = async (url) => {
    const data = await fetch(url,{ cache: 'no-store' });
    const post = await data.json();
    return post.data;
};