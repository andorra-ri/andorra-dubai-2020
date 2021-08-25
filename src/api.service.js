import { useAirtable } from 'painless-airtable';
import config from '/@/config.yaml';

const api = useAirtable({
  base: config.api.base,
  token: import.meta.env.VITE_AIRTABLE_TOKEN,
});

const { AGENDA } = config.api.resources;

export default {
  getAgenda: locale => {
    const { fields } = AGENDA.options;
    const options = {
      ...AGENDA.options,
      fields: [...fields, `name_${locale}`, `description_${locale}`],
    };
    return api.select(AGENDA.endpoint, options);
  },
};
