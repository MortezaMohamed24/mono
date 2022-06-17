import "./types";
import ps from "/components/popupify/style";
import {ID} from "./constants";
import React from "react";
import {Header} from "/components/popupify";
import {popupify} from "/components/popupify";


const FormattingHelpPopup = popupify(ID, () => (
  <>
    <Header title="Formatting help" />

    <section className={ps.body}>
      <p>Mono uses Markdown for formatting. Here are the basics. See the complete syntax.</p>

      <br />

      <p>First Level Heading</p>
      <code>
        # Making Scrambled Eggs: A Primer
      </code>

      <br />

      <p>Second Level Header</p>
      <code>## 1.1: Preparation</code>

      <br />

      <p>Paragraphs</p>
      <code>Add two new lines to start a new paragraph. Crack two eggs into the bowl and whisk.</code>

      <br />

      <p>Bold</p>
      <code>**Carefully** crack the eggs.</code>
      
      <br />

      <p>Emphasis</p>
      <code>Whisk the eggs *vigorously*.</code>

      <br />

      <p>Lists</p>
      <code>
        Ingredients:

        - Eggs
        - Oil
        - *Optional:* milk
      </code>
      
      <br />

      <p>Links</p>
      <code>To download a PDF version of the recipe, [click here](https://example.com/scrambled-eggs.pdf).</code>

      <br />
      <p>Images</p>
      <code>![The Finished Dish](https://example.com/eggs.png)</code>
    </section>
  </>
));


export default React.memo(FormattingHelpPopup, () => true);