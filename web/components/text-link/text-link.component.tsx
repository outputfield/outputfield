import React, { useEffect, useRef } from "react";
import { IStyles, ITextLinkProps } from "./text-link.model";
import styles from "./text-link.module.scss";
import colors from "../../colors";
import { Text } from "../text/text.component";

export const TextLink = ({
  textAlign = "left",
  url,
  target,
  color = colors.primary,
  size,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  onClick,
  children
}: ITextLinkProps) => {
  const textLinkStyles: IStyles = {
    textAlign,
    color,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
  };

  class TextRect{
    x: number;
    y: number;
    width: number;
    height: number;

    constructor(x: number, y: number, width: number, height: number){
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
    }
  }

  class TextRectList{
    x: number;
    y: number;
    width: number;
    height: number;
    end: number;
    recs: TextRect[];
    offset: boolean;
    offsetLength: number;
    length: number;
    rotate270: boolean;

    constructor(){
      this.x = Number.MAX_VALUE;
      this.y = Number.MAX_VALUE;
      this.width = 0;
      this.height = 0;
      this.end = Number.MIN_VALUE
      this.recs = [] as TextRect[];
      this.offset = false;
      this.offsetLength = 0;
      this.length = 0;
      this.rotate270 = false;
    }

    push(a: TextRect){
      if(a.x < this.x){ this.x = a.x }
      if(a.y < this.y){ this.y = a.y }
      if(a.x + a.width > this.end){ this.end = a.x + a.width}
      if(this.recs.length>=1 && a.x < this.recs[this.recs.length-1].x){
        this.offset = true;
        this.offsetLength = this.recs[this.recs.length-1].x - a.x;
      }
      this.width = this.end - this.x;
      this.height = a.y + a.height - this.y;
      this.recs.push(a);
      this.length++;
    }

    getElements(){
      // let text2;
      if(underline != null && underline.current != null && linktext != null && linktext.current != null){
        // text2 = [linktext2.current.getElementsByTagName("h1")[0],
        //           linktext2.current.getElementsByTagName("h2")[0],
        //           linktext2.current.getElementsByTagName("div")[0]][0];
      }
      return this.recs.map((e,i) => {
        if(underline != null && underline.current != null && linktext != null && linktext.current != null){
          let len = e.width/this.width*100;
          let wrap = document.createElement("div");
          wrap.classList.add(styles.linewrap);
          wrap.style.top = (e.y-this.y)+"px";
          if(this.offset && i==0){
            let st = this.offsetLength/this.width*100;
            wrap.style.clipPath = "polygon("+st+"% 0%, "+(st+len)+"% 0%, "+(st+len)+"% 100%, "+st+"% 100%)";

            // linktext2.current.style.left = "-"+this.offsetLength+"px";
            underline.current.style.left = "-"+this.offsetLength+"px";
            // linktext2.current.style.width = this.width+"px";
            // text2.style.textIndent = this.offsetLength+"px";

          } else {
            wrap.style.clipPath = "polygon(0% 0%, "+len+"% 0%, "+len+"% 100%, 0% 100%)";
            if(i==0){
              // linktext2.current.style.left = "0px";
              if(this.rotate270){
                underline.current.style.left = "-4px";
                underline.current.style.padding = " 0px 0.15em 0px 0px";
              } else {
                underline.current.style.left = "0px";
              }
            }
          }
          // text2.style.visibility = "visible";
          let element = document.createElement("div");
          element.setAttribute("full-width",""+this.width);
          element.classList.add(styles.line);
          if(this.rotate270){
            wrap.style.width = (e.width+12)+"px";
            wrap.style.height = this.height+"px";
            // wrap.style.transform = "rotate(270deg)";
            wrap.style.transformOrigin = "center center";
            // wrap.style.top = "6px"
            element.setAttribute("full-height",""+this.height);
            element.style.borderBottomWidth = "0px";
            element.style.transitionProperty = "height"
            let duration = Math.max(0.5,(this.height/700));
            linktext.current.style.transitionDuration = duration+"s";
            wrap.style.transitionDuration = duration+"s";
            element.style.transitionDuration = duration+"s";
            // linktext2.current.style.transitionDuration = Math.max(0.5,(this.height/700))+"s";
            element.classList.add(styles.clear270);
          } else {
            wrap.style.width = this.width+"px";
            wrap.style.height = (e.height+12)+"px";
            element.style.height = e.height+"px";
            element.style.borderRightWidth = "0px";
            element.style.transitionProperty = "width";
            let duration = Math.max(0.5,(this.width/700));
            linktext.current.style.transitionDuration = duration+"s";
            wrap.style.transitionDuration = duration+"s";
            element.style.transitionDuration = duration+"s";
            // linktext2.current.style.transitionDuration = Math.max(0.5,(this.width/700))+"s";
            element.classList.add(styles.clear);
          }
          element.style.borderTopWidth = "0px";
          element.style.borderLeftWidth = "0px";
          wrap.appendChild(element);
          return wrap;


        }
      })
    }

    setRotate270(rot: boolean){
      this.rotate270 = rot;
    }
  }

  const underline = useRef<HTMLDivElement>(null);
  const linktext = useRef<HTMLDivElement>(null);
  // const linktext2 = useRef<HTMLDivElement>(null);
  let nav;

  let linkrecs: DOMRectList, newlinkrecs: DOMRectList;
  let rotate270 = false;


  //https://medium.com/@pat_migliaccio/rate-limiting-throttling-consecutive-function-calls-with-queues-4c9de7106acc
  function limiter(fn, wait){
    let isCalled = false;

    return function(){
      if (!isCalled){
        fn.call();
        isCalled = true;
        setTimeout(function(){
          isCalled = false;
        }, wait)
      }
    };
  }

  function getRecs(){
    if(linktext != null && linktext.current != null){
      const obj = linktext.current.childNodes[0].childNodes[0];
      let r = document.createRange();
      r.selectNode(obj);
      return r.getClientRects();
    } else {
      return document.createRange().getClientRects();
    }
  }

  function compareRecs(a: DOMRectList, b: DOMRectList){
    let eq;
    if(a != null && b != null){
      eq = (a.length == b.length);
      if(eq){
        for(let i = 0; i < a.length; i++){
          if(a[i].width!=b[i].width || a[i].height!=b[i].height){
            eq = false;
            break;
          }
        }
      }
    }else {
      eq = false;
    }
    return eq
  }

  function generateLinks(recs){
    if(nav==null){nav=document.getElementById("nav");}
    if(linktext != null && linktext.current != null && recs != null && recs.length > 0 && nav != undefined){
        let r = new TextRectList();
        r.setRotate270(nav.contains(linktext.current)&&rotate270);
        for(let i = 0; i<recs.length; i++){
          r.push(new TextRect(
            recs[i].x,
            recs[i].y,
            recs[i].width,
            recs[i].height
          ));
        }

        return r;
      }
  }

  function appendLinks(links){
    if(underline != null && underline.current != null){
      underline.current.innerHTML = "";
      if(links != null && links.length > 0){
        links.getElements().forEach(e => {
          if(underline.current != null){
            let e2 = e.cloneNode(true);
            underline.current.appendChild(e);
            e2.classList.add(styles.linewrapblur);
            underline.current.appendChild(e2);
          }
        });
      }
    }
  }

  function handleResize(){
    newlinkrecs = getRecs();
    if(!compareRecs(linkrecs, newlinkrecs)){
      linkrecs = newlinkrecs;
      if(nav != null){
        rotate270 = (window.getComputedStyle(nav,null).transform!="none");
      }
      let a = generateLinks(linkrecs);
      if(a!=undefined){
        appendLinks(a);
      }
    }
  }

  function init(){
    if(linktext.current == null || /*linktext2.current == null ||*/ underline.current == null){
      setTimeout(init,50);
    } else {
      nav = document.getElementById("nav");
      handleResize();
    }
  }

  useEffect(() => {
    const resize = limiter(handleResize,25);

    window.addEventListener('load', function(){
      init();
    });

    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
    }
  });



  return(
    <a className={styles.root} onClick={onClick} href={url} target={target} style={textLinkStyles}>
      <div className={styles.linkUnderline} ref={underline}>
      </div>
      <div className={`${styles.linkText} ${styles.linkTextFirst}`} ref={linktext}>
        <Text size={size}>{children}</Text>
      </div>
    </a>
  );
};
