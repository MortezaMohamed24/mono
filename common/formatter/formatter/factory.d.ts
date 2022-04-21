import FactoryConfigs from "./types/factoryConfigs";
import FactoryOptions from "./types/factoryOptions";
import FormatterWithConfigs from "./types/formatterWithConfigs";


export function FormatterFactory<TConfigs extends FactoryConfigs>(options: FactoryOptions<TConfigs>): FormatterWithConfigs<TConfigs>;


export default FormatterFactory;