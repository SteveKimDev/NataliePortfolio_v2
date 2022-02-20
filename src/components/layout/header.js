import * as React from 'react';
import Stack from 'react-bootstrap/Stack';
import { Link } from 'gatsby';

import Logo from './logo';
import Linkedin from '../../svg/linkedin.svg';
import Twitter from '../../svg/twitter.svg';
import Github from '../../svg/github.svg';
import OffCanvasMenu from './off-canvas-menu';

const Header = () => (
  <Stack className={`header`} direction='horizontal' gap={4}>
    <div>
      <div className={`float-shadow logo-div header-logo-div`}>
        <Logo />
      </div>
    </div>
    <div className={`ms-auto hidden`}>
      <Link to='/' className={`float-shadow header-link`}>
        Home
      </Link>
    </div>
    <div className={`hidden`}>
      <Link to='/#story' className={`float-shadow header-link`}>
        True Story
      </Link>
    </div>
    <div className={`hidden`}>
      <Link to='/' className={`float-shadow header-link`}>
        Work
      </Link>
    </div>
    <div className={`hidden`}>
      <Link to='/' className={`float-shadow header-link`}>
        Experience
      </Link>
    </div>
    <div className={`hidden`}>
      <Link to='/' className={`float-shadow header-link`}>
        Contact
      </Link>
    </div>
    <div className={`ms-auto hidden`}>
      <div to='/' className={`float-shadow header-div`}>
        <div className={`social-icon-div`}>
          <a
            className={`social-icon-link`}
            href='/'
            target='_blank'
            rel='noreferrer'
          >
            <Linkedin className={`social-icons`} />
          </a>
          <a
            className={`social-icon-link`}
            href='/'
            target='_blank'
            rel='noreferrer'
          >
            {' '}
            <Twitter className={`social-icons`} />
          </a>
          <a
            className={`social-icon-link`}
            href='/'
            target='_blank'
            rel='noreferrer'
          >
            <Github className={`social-icons`} />
          </a>
        </div>
      </div>
    </div>

    {/* Canvas Menu */}
    <div className={`ms-auto display`}>
      <OffCanvasMenu />
    </div>
  </Stack>
);

export default Header;
