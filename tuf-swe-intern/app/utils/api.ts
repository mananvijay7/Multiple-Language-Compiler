export const insertCode = async (data: Object) => {
      try{
            const response = await fetch('/api/compile', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(data)
            });
      
            if(response.ok){
              const res = '{result: success}';
              return res;
            }else{
              const res = '{result1: failed}';
              return res;
            }
          }catch(error){
            const res = '{result2: failed in catch}';
              return res;
          }
}