import React, { useState, useEffect } from "react";
import { createLevel, cutCpvCode } from "../../services";
import { toast } from "react-toastify";
import { IconButton } from "../Button/Button";
import { IoIosCopy } from "react-icons/io";
import {
  CategoryWrapper,
  CategoryCode,
  CategoryDescription,
  HilightDescription,
  CodeWrapper,
  DescriptionWrapper,
} from "./Category.styled";
import { hiLight } from "../../services";
import { CopyToClipboard } from "react-copy-to-clipboard";
// Компонент рендерить розмітку категорії і вкладені списки
const Category = React.forwardRef(
  (
    { element: { Code, DescriptionUA }, selectCategory, children, query },
    ref
  ) => {
    const [level, setLevel] = useState(null);

    useEffect(() => {
      const cutedCpvCode = cutCpvCode(Code);
      setLevel(createLevel(cutedCpvCode));
    }, [Code]);

    function handleClick(event) {
      selectCategory(event);
    }

    return (
      <>
        <CategoryWrapper level={level} onClick={handleClick} ref={ref}>
          <CodeWrapper level={level}>
            <CopyToClipboard
              text={Code}
              onCopy={() =>
                toast.info(`Код ${Code} скопійовано в буфер омбіну`)
              }
            >
              <IconButton
                icon={IoIosCopy}
                visibility="hide"
                position="absolute"
                variant="light"
              ></IconButton>
            </CopyToClipboard>
            <CategoryCode>{Code}</CategoryCode>
          </CodeWrapper>

          {query ? (
            <DescriptionWrapper>
              <HilightDescription>
                {hiLight(query, DescriptionUA)}
              </HilightDescription>
              <CopyToClipboard
                text={DescriptionUA}
                onCopy={() =>
                  toast.info(`${DescriptionUA} скопійовано в буфер омбіну`)
                }
              >
                <IconButton
                  icon={IoIosCopy}
                  visibility="hide"
                  position="absolute"
                  variant="dark"
                ></IconButton>
              </CopyToClipboard>
            </DescriptionWrapper>
          ) : (
            <DescriptionWrapper>
              <CopyToClipboard
                text={DescriptionUA}
                onCopy={() =>
                  toast.info(`${DescriptionUA} скопійовано в буфер омбіну`)
                }
              >
                <IconButton
                  icon={IoIosCopy}
                  visibility="hide"
                  position="absolute"
                  variant="dark"
                ></IconButton>
              </CopyToClipboard>
              <CategoryDescription>{DescriptionUA}</CategoryDescription>
            </DescriptionWrapper>
          )}
        </CategoryWrapper>
        <div>{children}</div>
      </>
    );
  }
);

export default Category;

// className={`${css.categoryCode} ${css[level]}`}
