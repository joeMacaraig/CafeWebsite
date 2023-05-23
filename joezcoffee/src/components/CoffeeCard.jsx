import { icons } from "react-icons/lib";

export const CoffeeCard = ({title}) => {
  return (
  <div className="flex-col">
    <div>{title}</div>
    <div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In enim
      nulla, gravida eget feugiat non, pretium a diam. In ut consequat
      leo. Phasellus ac consectetur diam.
    </div>
  </div>
  );
};
