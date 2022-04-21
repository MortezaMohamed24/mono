import Configs from "./configs";
import Options from "./options";
import ReturnType from "./returnType";
import formatterify from "../../formatterify";
import defaultOptions from "./defaultOptions";


function TUBLE<TConfigs extends Configs>(nonDefaultizedOptions: Options<TConfigs>) {
  type Return = ReturnType<TConfigs>


  const options = {
    ...defaultOptions,
    ...nonDefaultizedOptions,
  };

  const {
    strict,
    content,
  } = options;


  return formatterify<TConfigs, unknown[], Return>({options}, 
    (unformatted, {INVALID}) => {
      const copy: any[] = [];
      const length = content.length;
      
      for (let i = 0; i < length; i++) {
        const value = unformatted[i];
        const formatter = content[i];
        const formatted = formatter(value, strict ? {strict} : undefined);
  
        if (formatted === INVALID) {
          throw formatter.error(value);
        }
  
        copy[i] = formatted;
      }
  
      return copy as Return;
    }
  );
}


export default TUBLE;