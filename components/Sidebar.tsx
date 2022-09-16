import React from 'react';
import {
  BellIcon,
  HashtagIcon,
  BookmarkIcon,
  UserIcon,
  HomeIcon,
  EnvelopeIcon,
  ListBulletIcon,
  EllipsisHorizontalCircleIcon,
} from '@heroicons/react/24/outline';
import SidebarRow from './SidebarRow';

function Sidebar() {
  return (
    <div className="col-span-2 flex flex-col items-center px-4 md:items-start">
      <img className="h-10 w-10 m-3" src="/logo.png" alt="" />
      <SidebarRow Icon={HomeIcon} title="Home" />
      <SidebarRow Icon={HashtagIcon} title="Explore" />
      <SidebarRow Icon={BellIcon} title="Notifications" />
      <SidebarRow Icon={EnvelopeIcon} title="Messages" />{' '}
      <SidebarRow Icon={BookmarkIcon} title="Bookmarks" />
      <SidebarRow Icon={ListBulletIcon} title="Lists" />
      <SidebarRow Icon={UserIcon} title="Sign In" />
      <SidebarRow Icon={EllipsisHorizontalCircleIcon} title="More" />
    </div>
  );
}

export default Sidebar;
