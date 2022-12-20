import HeaderIcons from "./HeaderIcons"
import Image from 'next/image'
import { HomeIcon, LightningBoltIcon, BadgeCheckIcon, CollectionIcon, SearchIcon, UserIcon } from '@heroicons/react/outline'


function Header() {
    return (
        <header className="flex flex-col sm:flex-row justify-between items-center h-auto m-5">
            <div className="flex flex-grow justify-evenly max-w-2xl">
                <HeaderIcons title="HOME" Icon={HomeIcon} />
                <HeaderIcons title="TRENDING" Icon={LightningBoltIcon} />
                <HeaderIcons title="VERIFIED" Icon={BadgeCheckIcon} />
                <HeaderIcons title="COLLECTIONS" Icon={CollectionIcon} />
                <HeaderIcons title="SEARCH" Icon={SearchIcon} />
                <HeaderIcons title="ACCOUNT" Icon={UserIcon} />
            </div>
            <Image
                className="object-contain"
                width="200"
                height="100"
                src="https://links.papareact.com/ua6"
            />
        </header>
    );
}

export default Header
