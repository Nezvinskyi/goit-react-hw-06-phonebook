import './Section.scss'

const Section = ({ title, children }) => (
	<div className='Section'>
		{title && <h2>{title}</h2>}
		{children}
	</div>
);
 
export default Section;