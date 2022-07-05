import s from "./style";
import Dates from "./dates";
import React from "react";
import Labels from "./labels";
import Header from "./header";
import Actions from "./actions";
import classNames from "classnames";
import Checklists from "./checklists";
import Description from "./description";
import DeleterPopup from "/components/deleterPopup";
import DateTimePopup from "/components/dateTimePopup";
import CardDatesPopup from "/components/cardDatesPopup";
import CardMoverPopup from "/components/cardMoverPopup";
import CardCopierPopup from "/components/cardCopierPopup";
import LabelsListPopup from "/components/labelEditorPopup";
import LabelEditorPopup from "/components/labelEditorPopup";
import LabelCreatorPopup from "/components/labelCreatorPopup";
import FormattingHelpPopup from "/components/formattingHelpPopup";
import PageWithMainNavigation from "/templates/withMainNavbar";
import ChecklistCreatorPopup from "./checklistCreatorPopup";
import ChecklistOptionsPopup from "./checklistOptionsPopup";


interface Props {
  match: {params: {idCard: string}}
}

const equals = (propsA: Props, propsB: Props) => (
  propsA.match.params.idCard === propsB.match.params.idCard
);


const Card = React.memo(({match: {params: {idCard}}}: Props) => (
  <>
    <PageWithMainNavigation>
      {/* TODO: */}
      <div className={classNames(s.wrapper, (s as any)["theme" as any] as any)}>
        <div className={s.editor}>
          <Header />

          <section>
            <Labels />
            <Dates />
            <Description />
            <Checklists />
          </section>

          <Actions /> 
        </div>
      </div>

    </PageWithMainNavigation>

    <DeleterPopup />
    <DateTimePopup />
    <CardDatesPopup />
    <CardMoverPopup />
    <CardCopierPopup />
    <LabelsListPopup />
    <LabelEditorPopup />
    <LabelCreatorPopup />
    <FormattingHelpPopup />
    <ChecklistCreatorPopup />
    <ChecklistOptionsPopup />
  </>
), equals);


export default Card;