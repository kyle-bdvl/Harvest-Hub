// Props + you declare interface

// null != undefined
type Header= {
name ?:string;
counter ?:number;
children ?:React.ReactNode;
}
export function Header({name="default value", counter=0, children}:Header) {
  return (
    <div className="flex flex-col bg-stone-200 gap-1.5">
      <h1>Hello this {name }</h1>
      <p>His friends are Kyle and Varshan</p>
      <p>You pressed {counter} </p>
      {children}
    </div>
  );
}