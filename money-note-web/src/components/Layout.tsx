import c from './Layout.module.scss';

const Layout = ({ className, children }) => (
  <div className={`${c.layout} ${className}`}>
    {children}
  </div>
);

export default Layout;
