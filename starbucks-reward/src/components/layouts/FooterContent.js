import classes from './FooterContent.module.css'
import { Link } from 'react-router-dom'

const FooterContent = (props) => {
  function li_list(items) {
    return <li key={items.id} className={classes.li}><Link to={'#'}>{items.name}</Link></li>;
  }
  return (
    <div id={classes.footercontent} >
      <h3>{props.title}</h3>
      <ul>{props.footer_list.map(li_list)}</ul>
    </div>
  );
};

export default FooterContent;
