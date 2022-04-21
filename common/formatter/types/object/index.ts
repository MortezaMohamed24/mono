import Configs from "./configs";
import ReturnType from "./returnType";
import formatterify from "../../formatterify";
import defaultOptions from "./deafultOptions";


function OBJECT<TConfigs extends Configs>(nonDefaultizedOptions: TConfigs) {
  type Return = ReturnType<TConfigs>


  const options = {
    ...defaultOptions,
    ...nonDefaultizedOptions,
  };

  const {
    strict,
    content,
  } = options;


  return formatterify<TConfigs, Record<any, unknown>, Return>({options}, 
    (unformatted, {INVALID}) => {
      const copy: Record<any, any> = {};
      

      for (let [key, formatter] of Object.entries(content)) {
        const formatted = formatter(unformatted[key], strict ? {strict} : undefined);
  
        if (formatted === INVALID) {
          throw formatter.error(unformatted[key]);
        }
  
        copy[key] = formatted;
      }
  

      return copy as Return;
    }
  );
}


export default OBJECT;