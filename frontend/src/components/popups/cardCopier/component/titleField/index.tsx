import React from "react";
import idAttr from "/util/dom/idAttr";
import Textarea from "/components/textarea/statefull";
import {useState} from "react";
import {useEffect} from "react";
import {TextareaMeta} from "/components/textarea/statefull";
import {MIN_TITLE_LENGTH} from "/cards/fields/constants";
import {MAX_TITLE_LENGTH} from "/cards/fields/constants";


interface Props {
  meta: TextareaMeta;
  onValidity(isValid: boolean): void;
  sourceCardTitle: string;
}

const TitleField = React.memo<Props>(({meta, onValidity, sourceCardTitle}) => {
  const [id] = useState<string>(idAttr);


  useEffect(() => {
    meta.set?.(sourceCardTitle ? `${sourceCardTitle} Copy` : "Copy");
    meta.select?.();
  }, []);


  return (
    <section>
      <h3>
        <label htmlFor={id}>New Title</label>
      </h3>
  
      <Textarea 
        id={id}
        min={MIN_TITLE_LENGTH}
        max={MAX_TITLE_LENGTH}
        meta={meta}
        styled={true}
        oneLine={true}
        required={true}
        onValidity={onValidity}
        placeholder="Enter new title..."
      />
    </section>
  );
});


export default TitleField;