// import { Link } from 'react-router-dom';
interface FooterProps {
	variant: 'default' | 'mobile';
}

export const Footer = ({ variant }: FooterProps) => {
	console.log(variant);
	return (
		<div
			id='footer'
			className='sticky top-0 w-screen text-sm bg-[#f0f0f0] border-t-[1.2px] border-black h-1/5'
		></div>
	);
};
