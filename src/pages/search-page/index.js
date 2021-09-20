import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Creators } from '../../store/heroes/heroes-duck';

import SearchInput from "../../components/form/input";
import PageTable from "./page-table";
import Paginator from "../../components/paginator";

import "./page-search.css";

function SearchPage(
  {
    history,
    heroes,
    isMobile,
    limit,
    offset,
    totalPages,
    filter,
    selectHero,
    fetchHeroesAsync,
    onPaginateAsync,
    onFilterAsync,
  }) {

  useEffect(() => {
    fetchHeroesAsync();
  }, [limit]);

  return (
    <div className="search-page">
      <SearchInput filter={filter} isMobile={isMobile} searchHandler={onFilterAsync} label="Nome do Personagem" id="hero-search" />
      <PageTable heroes={heroes} history={history} isMobile={isMobile} selectHandler={selectHero} />
      {
        heroes.length > 0 &&
        <Paginator onPaginate={onPaginateAsync} offset={offset} totalPages={totalPages} isMobile={isMobile} />
      }
    </div>
  );
}

const mapStateToProps = state => ({
  heroes: state.Heroes.heroes,
  isMobile: state.Template.isMobile,
  limit: state.Heroes.limit,
  offset: state.Heroes.offset,
  totalPages: state.Heroes.totalPages,
  filter: state.Heroes.name,
});

const mapDispatchToCreators = dispatch => bindActionCreators(Creators, dispatch);

export default connect(mapStateToProps, mapDispatchToCreators)(SearchPage);
