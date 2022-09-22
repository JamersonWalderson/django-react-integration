import { Icon } from "./styles";

interface IContact {
  icon: string;
  link: string;
}

const Contact = ({
  icon,
  link
}:IContact) => {

  return(
    <div>
      <a  
        target="_blank"
        href={link}>
        <Icon 
          className={`fa-3x ${icon}`}
          aria-hidden="true"
        />
      </a>
    </div>
  )
}

export default Contact;