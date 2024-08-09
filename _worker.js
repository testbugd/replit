export default {
    async fetch(request, env) {
      let url = new URL(request.url);
      if (url.pathname.startsWith('/')) {
        url.hostname="218a0b63-2a70-4d6e-8c0d-b0ef07f7196c-00-1v0q6ydk4pqo6.picard.replit.dev";
        let new_request=new Request(url,request);
        return fetch(new_request);
      }
      // Otherwise, serve the static assets.
      return env.ASSETS.fetch(request);
    }
  };
