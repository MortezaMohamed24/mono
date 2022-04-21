import Configs from "./configs";
import Options from "./options";
import ReturnType from "./returnType";
import formatterify from "../../formatterify";
import defaultOptions from "./defaultOptions";


function ARRAY<TConfigs extends Configs>(nonDefaultizedOptions: Options<TConfigs>) {
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
      const copy: unknown[] = [];
      
      for (let item of unformatted) {
        for (let formatter of content) {
          const output = formatter(item, strict ? {strict} : undefined);
          
          if (output === INVALID) {
            throw formatter.error(item);
          }

          copy.push(output);
        }
      }
      
      return copy as Return;
    }
  );
}


export default ARRAY;