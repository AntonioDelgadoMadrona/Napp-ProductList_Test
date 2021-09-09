// DEPENDENCIES
import { memo } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router";

// STYLES
import { StyledTable, StyledContainer, StyledItem } from "./styles";
import noResults from "../../../images/noresults.png";

const Table = memo(({ items }) => {
  const history = useHistory();
  return (
    <StyledTable>
      <StyledContainer>
        {items?.length > 0 &&
          items.map((item) => (
            <StyledItem
              key={item.id}
              onClick={() =>
                history.push({
                  pathname: "/ProductDetails",
                  search: `?id=${item.id}`,
                })
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

Table.propTypes = {
  items: PropTypes.array,
};

export default Table;
