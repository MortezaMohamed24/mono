import s from "./style";
import React from "react";
import {Route} from "react-router-dom";
import {useHistory} from "react-router-dom";


type Opions<TProps extends object> = {
  path: string;
  exact?: boolean;
  component: React.FunctionComponent<
    & TProps 
    & {params: Record<string, string | undefined>} 
    & {close(): void}
  >;
}


const URLModulify = <TProps extends object>({path, exact, component: Component}: Opions<TProps>) => (
  React.memo<TProps>((props: TProps) => {
    const history = useHistory();
  
  
    function close() {
      history.goBack();
    }
  
    function onArticleClicked(event: React.MouseEvent<HTMLElement>) {
      if (event.target === event.currentTarget) {
        close();
      }
    }
    
  
    return (
      <Route path={path} exact={exact}>
        {({match}) => {
          if (match) {
            return (
              <article className={s.module} onClick={onArticleClicked}>
                <Component
                  {...props}
                  close={close}
                  params={match.params}
                />
              </article>
            );
          } else {
            return null;
          }
        }}
      </Route>
    );
  })
);


export default URLModulify;