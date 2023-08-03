import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
	return (
		<nav className="flex w-full flex-row bg-red-200">
			<Link href="/">
				<div className="flex">
					<Image
						width="70"
						height="70"
						src="/los-amigos-happy-200.png"
						alt="los amigos logo"
					/>
					<div className="m-1 flex flex-col content-center justify-center">
						<h1 className="inline leading-5">Restaurante Los Amigos</h1>
					</div>
				</div>
			</Link>
		</nav>
	);
};

export default Navbar;
