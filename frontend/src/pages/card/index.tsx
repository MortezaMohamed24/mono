import s from "./style";
import Dates from "./dates";
import React from "react";
import Labels from "./labels";
import Header from "./header";
import Actions from "./actions";
import classNames from "classnames";
import Checklists from "./checklists";
import Description from "./description";
import DeleterPopup from "/popups/deleter";
import DateTimePopup from "/popups/dateTime";
import CardDatesPopup from "/popups/cardDates";
import CardMoverPopup from "/popups/cardMover";
import CardCopierPopup from "/popups/cardCopier";
import LabelsListPopup from "/popups/labelEditor";
import LabelEditorPopup from "/popups/labelEditor";
import LabelCreatorPopup from "/popups/labelCreator";
import FormattingHelpPopup from "/popups/formattingHelp";
import PageWithMainNavigation from "/templates/withMainNavbar";
import ChecklistCreatorPopup from "./checklists/checklist/popups/checklistCreator";
import ChecklistOptionsPopup from "./checklists/checklist/popups/checklistOptions";


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