import { stringify } from 'qs'
import { Page } from "~~/models/cms/Page";
import md from "markdown-it";

export const useCMS = () => {
  const config = useRuntimeConfig()
  const url = config?.public?.strapi?.url || config?.strapi?.url || ''
  const prefix = config?.public?.strapi?.prefix || config?.strapi?.prefix || '/api'
  const baseURL = `${url}${prefix}`
  const find = async (entity: string, query?: any):Promise<any> => {
    query = {
      ...query,
      populate: "deep",
    };
    query = stringify(query, { encodeValuesOnly: true })
    const path = `${baseURL}/${entity}?${query}`
    const response = await fetch(path, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
    return response || null;
  };
  const findOne = async (entity: string, params?: any) => {
    const { data = [] } = await find(entity, params);
    return data?.[0] || null;
  }
  const findPage = async (params: object) => {
    const data = await findOne("pages", params);
    if (data) {
      return new Page(data);
    }
    return null;
  }
  return {
    find,
    findOne,
    findPage

  }
}

export const markdown = (body: string): string => {
  const renderer = md({});
  return renderer.render(body);
};
