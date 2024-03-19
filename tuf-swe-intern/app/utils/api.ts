const createURL = (path) => {
      return window.location.origin + path;
}

export const insertCode = async (data) => {
      let {username, preferred_language, standard_input, source_code} = data;
      console.log(username + " " + preferred_language + " " + standard_input + " " + source_code);
      //console.log(data);
      try {
        const response = await fetch(new Request(createURL(`/api/compile`)), {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({username, preferred_language, standard_input, source_code})
        });
    
        if (response.ok) {
          return { result: 'success' };
        } else {
          return { result: 'failed' };
        }
      } catch (error) {
        console.error(error);
        return { result: 'failed in catch' };
      }
};    