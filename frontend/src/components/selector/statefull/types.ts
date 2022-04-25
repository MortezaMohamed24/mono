import {UseSelectorReturn} from "./useSelector/types";
import WithHTMLAttributes from "/util/ts/withHTMLAttributes";


export type Props = Readonly<
  WithHTMLAttributes<
    HTMLElement, {
      state: UseSelectorReturn;
      caption?: string | undefined;
      noOptsMsg?: string | undefined;
    }
  >
>