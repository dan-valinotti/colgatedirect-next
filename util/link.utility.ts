import Router from 'next/router';

interface LinkArgs {
  path: string;
  params?: object;
}

function link(args: LinkArgs) {
  let params = '';
  let query = '';

  for (const key in args.params) {
    if (args) {
      params += `/${args.params[key]}`;
      query += `&${key}=${args.params[key]}`;
    }
  }

  const href = `${args.path}?${query}`;
  const as = `${args.path}${params}`;

  Router.push(href, as).then((r) => console.log(r));
}

export default link;
