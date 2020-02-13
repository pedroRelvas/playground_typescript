import React, { FunctionComponent } from "react"; //importing FunctionComponent
// -> this is the generic type provided by the official typings

type CardProps = {
  title: string;
  paragraph?: string; //the paragraph is optional
};

//We can use children even though we haven't defined them in our CardProps
export const Card: FunctionComponent<CardProps> = ({
  title,
  paragraph,
  children
}) => (
  <>
    <h1>Class</h1>
    <aside>
      <h2>{title}</h2>
      <p>{paragraph}</p>
      {children}
    </aside>
  </>
);

//undestructured
/* export const Card: FunctionComponent<CardProps> = (props) => <aside>
  <h2>{ props.title }</h2>
  <p> {props.paragraph}</p>
  {props.children}
  </aside>
 */
const el = <Card title="Welcome!" paragraph="To this example" />;
