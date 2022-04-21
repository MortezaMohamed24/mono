import Configs from "./configs";
import Options from "./options";
import ReturnType from "./returnType";
import formatterify from "../../formatterify";


function OR<TConfigs extends Configs>({or, ...options}: Options<TConfigs>) {
  type Return = ReturnType<TConfigs>


  const name = "Or";
  const {strict} = options;


  return formatterify<TConfigs, unknown[], Return>({name, options},
    (unformatted, {error, INVALID}) => {
      for (let item of unformatted) {
        for (let formatter of or) {
          let formatted;

          try {
            formatted = formatter(item, strict ? {strict} : undefined);
          } catch (e) {
            formatted = INVALID;
          }

          if (formatted !== INVALID) {
            return formatted as Return;
          }
        }
      }

                
      throw error();
    }
  );
}


export default OR;