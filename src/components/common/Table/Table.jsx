// DEPENDENCIES
import { memo } from "react";
import { useHistory } from "react-router-dom";

// STYLES
import { StyledTable, StyledContainer, StyledItem } from "./styles";
import noResults from "../../../images/noresults.png";

const Table = memo(({ items, page, handlePage }) => {
  const history = useHistory();

  return (
    <StyledTable>
      <StyledContainer>
        {items?.length > 0 &&
          items.map((item) => (
            <StyledItem
              key={item.id}
              onClick={() =>
                history.push({ pathname: "/Movie", search: `?id=${item.id}` })
              }
            >
              {item.image}
              <h4>{item.brand}</h4>
              <p>{item.model}</p>
              <span>{item.price}</span>
              <span className="oldPrice">{item.oldPrice}</span>
            </StyledItem>
          ))}
        {items?.length === 0 && (
          <img className="noResults" src={noResults} alt="noResults" />
        )}
      </StyledContainer>
    </StyledTable>
  );
});

export { Table };
