import { classnames } from '../../lib';

const FeedbackButton = ({ open, ...props }) => {
  return (
    <a className="menu-item default-item cursor-pointer" {...props}>
      <i className="fa-regular fa-flag-swallowtail w-8 text-xl"></i>
      <span className={classnames(open ? 'opacity-open' : 'opacity-close transition-none')}>
        Feedback
      </span>
    </a>
  );
};

export default FeedbackButton;
