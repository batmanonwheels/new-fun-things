import { Link } from 'react-router-dom';

interface HeaderProps {
	variant: 'default' | 'mobile';
}

export const Header = ({ variant }: HeaderProps) => {
	console.log(variant);
	return (
		// <div
		// 	id='header'
		// 	className='w-screen px-2 text-sm border-b-[1.2px] border-black h-1/5 sticky top-0'
		// >
		<div
			id='header'
			className='sticky top-0 w-screen text-sm bg-[#f0f0f0] border-black h-1/5'
		>
			<div className='flex items-center justify-between h-24 px-6'>
				<div className='flex justify-around h-full gap-10 *:flex *:items-center *:h-full hover:*:underline'>
					<Link to='/collections'>
						<span>SHOP</span>
					</Link>
					<div className='cursor-pointer'>
						<span>SEARCH</span>
					</div>
				</div>

				<Link to='/' className='flex items-center h-full hover:underline'>
					<span className='*:text-base'>
						<span>n</span>ew <span>f</span>un <span>t</span>hing<span>s</span>
					</span>
				</Link>

				<div className='flex justify-around h-full gap-10 *:flex *:items-center *:h-full hover:*:underline'>
					<Link to='/about'>
						<span>ABOUT</span>
					</Link>
					<Link to='/account/login'>
						<span>LOGIN</span>
					</Link>
					<Link to='/cart'>
						<span>CART(0)</span>
					</Link>
				</div>
			</div>
		</div>
	);
};
