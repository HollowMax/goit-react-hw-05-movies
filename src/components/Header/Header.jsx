import { StyledHeader, StyledLink } from './Header.styled';

export function Header() {
  return (
    <>
      <StyledHeader>
        <nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </StyledHeader>
    </>
  );
}
