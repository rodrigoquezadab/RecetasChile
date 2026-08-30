/**
 * Sabores de Chile - Lógica Interactiva y Experiencia de Usuario
 * Control de filtros, escalador de porciones, modo cocina, temporizador y favoritos.
 */

(function () {
  'use strict';

  // ESTADO DE LA APLICACIÓN
  const state = {
    filters: {
      zone: 'all',
      category: 'all',
      difficulty: 'all',
      time: 'all',
      cost: 'all',
      search: '',
      sort: 'featured'
    },
    currentPredictions: [],
    predictiveSelectedIndex: -1,
    currentRecipe: null,
    currentServings: 6,
    favorites: new Set(),
    checkedIngredients: new Set(),
    completedSteps: new Set(),
    kitchenStepIndex: 0,
    timer: {
      secondsRemaining: 900,
      totalSeconds: 900,
      intervalId: null,
      isRunning: false
    },
    theme: 'light'
  };

  // ELEMENTOS DOM
  const DOM = {
    body: document.body,
    btnToggleTheme: document.getElementById('btnToggleTheme'),
    themeIconSun: document.getElementById('themeIconSun'),
    themeIconMoon: document.getElementById('themeIconMoon'),
    btnOpenFavorites: document.getElementById('btnOpenFavorites'),
    favoritesCounter: document.getElementById('favoritesCounter'),
    searchInput: document.getElementById('searchInput'),
    btnClearSearch: document.getElementById('btnClearSearch'),
    searchPredictionsDropdown: document.getElementById('searchPredictionsDropdown'),
    searchPredictionsList: document.getElementById('searchPredictionsList'),
    zonesCarousel: document.getElementById('zonesCarousel'),
    categoryFilterGroup: document.getElementById('categoryFilterGroup'),
    selectDifficulty: document.getElementById('selectDifficulty'),
    selectTime: document.getElementById('selectTime'),
    selectCost: document.getElementById('selectCost'),
    selectSort: document.getElementById('selectSort'),
    btnResetFilters: document.getElementById('btnResetFilters'),
    resultsCount: document.getElementById('resultsCount'),
    activeTagsList: document.getElementById('activeTagsList'),
    recipesGrid: document.getElementById('recipesGrid'),
    emptyState: document.getElementById('emptyState'),
    btnResetEmpty: document.getElementById('btnResetEmpty'),
    statRecipeCount: document.getElementById('statRecipeCount'),

    // Modal de Receta
    modalBackdrop: document.getElementById('recipeModalBackdrop'),
    btnModalClose: document.getElementById('btnModalClose'),
    modalRecipeImage: document.getElementById('modalRecipeImage'),
    modalZoneBadge: document.getElementById('modalZoneBadge'),
    modalCategoryBadge: document.getElementById('modalCategoryBadge'),
    modalDifficultyBadge: document.getElementById('modalDifficultyBadge'),
    modalRecipeTitle: document.getElementById('modalRecipeTitle'),
    modalRecipeTagline: document.getElementById('modalRecipeTagline'),
    modalPrepTime: document.getElementById('modalPrepTime'),
    modalCookTime: document.getElementById('modalCookTime'),
    modalTotalTime: document.getElementById('modalTotalTime'),
    modalCostPerServing: document.getElementById('modalCostPerServing'),
    modalCostTierBadge: document.getElementById('modalCostTierBadge'),
    modalCostServingsCount: document.getElementById('modalCostServingsCount'),
    modalCostTotal: document.getElementById('modalCostTotal'),
    modalCostServing: document.getElementById('modalCostServing'),
    modalCostNote: document.getElementById('modalCostNote'),
    btnModalFavorite: document.getElementById('btnModalFavorite'),
    modalFavHeart: document.getElementById('modalFavHeart'),
    modalFavText: document.getElementById('modalFavText'),
    btnModalPrint: document.getElementById('btnModalPrint'),
    btnOpenKitchenMode: document.getElementById('btnOpenKitchenMode'),
    modalRecipeHistory: document.getElementById('modalRecipeHistory'),
    btnPortionMinus: document.getElementById('btnPortionMinus'),
    btnPortionPlus: document.getElementById('btnPortionPlus'),
    servingsDisplay: document.getElementById('servingsDisplay'),
    modalIngredientsList: document.getElementById('modalIngredientsList'),
    modalGrandmasSecret: document.getElementById('modalGrandmasSecret'),
    modalWinePairing: document.getElementById('modalWinePairing'),
    modalStepsList: document.getElementById('modalStepsList'),

    // Modo Cocina (Kitchen Mode)
    kitchenModeOverlay: document.getElementById('kitchenModeOverlay'),
    btnCloseKitchenMode: document.getElementById('btnCloseKitchenMode'),
    kitchenRecipeTitle: document.getElementById('kitchenRecipeTitle'),
    kitchenProgressFill: document.getElementById('kitchenProgressFill'),
    kitchenStepBadge: document.getElementById('kitchenStepBadge'),
    kitchenStepTitle: document.getElementById('kitchenStepTitle'),
    kitchenStepText: document.getElementById('kitchenStepText'),
    kitchenStepTipBox: document.getElementById('kitchenStepTipBox'),
    kitchenStepTip: document.getElementById('kitchenStepTip'),
    btnKitchenPrev: document.getElementById('btnKitchenPrev'),
    btnKitchenNext: document.getElementById('btnKitchenNext'),
    kitchenStepDots: document.getElementById('kitchenStepDots'),
    btnKitchenIngredientsToggle: document.getElementById('btnKitchenIngredientsToggle'),
    kitchenIngredientsDrawer: document.getElementById('kitchenIngredientsDrawer'),
    btnCloseKitchenDrawer: document.getElementById('btnCloseKitchenDrawer'),
    kitchenDrawerList: document.getElementById('kitchenDrawerList'),
    btnSetStepTimer: document.getElementById('btnSetStepTimer'),

    // Temporizador
    timerClock: document.getElementById('timerClock'),
    btnTimerToggle: document.getElementById('btnTimerToggle'),
    btnTimerReset: document.getElementById('btnTimerReset'),

    // Favoritos Drawer
    favoritesBackdrop: document.getElementById('favoritesBackdrop'),
    btnCloseFavorites: document.getElementById('btnCloseFavorites'),
    favoritesList: document.getElementById('favoritesList'),
    favoritesEmpty: document.getElementById('favoritesEmpty')
  };

  // AUDIO SINTÉTICO PARA CAMPANA DEL TEMPORIZADOR Y ACCIONES
  const playChime = (freq = 587.33, duration = 0.4) => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(0.2, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch (e) {
      // AudioContext opcional no bloqueante
    }
  };

  // 1. INICIALIZACIÓN
  function init() {
    loadTheme();
    loadFavorites();
    renderZonePills();
    renderCategoryPills();
    updateResults();
    setupEventListeners();

    if (DOM.statRecipeCount && RECETAS_CHILE) {
      DOM.statRecipeCount.textContent = RECETAS_CHILE.length;
    }
  }

  // 2. GESTIÓN DE TEMA CLARO / OSCURO
  function loadTheme() {
    const saved = localStorage.getItem('sabores_chile_theme') || 'dark';
    setTheme(saved);
  }

  function setTheme(theme) {
    state.theme = theme;
    DOM.body.setAttribute('data-theme', theme);
    localStorage.setItem('sabores_chile_theme', theme);
    if (theme === 'dark') {
      DOM.themeIconSun.classList.add('hidden');
      DOM.themeIconMoon.classList.remove('hidden');
    } else {
      DOM.themeIconSun.classList.remove('hidden');
      DOM.themeIconMoon.classList.add('hidden');
    }
  }

  function toggleTheme() {
    const next = state.theme === 'light' ? 'dark' : 'light';
    setTheme(next);
  }

  // 3. GESTIÓN DE FAVORITOS (LOCALSTORAGE)
  function loadFavorites() {
    try {
      const raw = localStorage.getItem('sabores_chile_favs');
      if (raw) {
        state.favorites = new Set(JSON.parse(raw));
      }
    } catch (e) {
      state.favorites = new Set();
    }
    updateFavoritesBadge();
  }

  function saveFavorites() {
    try {
      localStorage.setItem('sabores_chile_favs', JSON.stringify([...state.favorites]));
    } catch (e) {}
    updateFavoritesBadge();
  }

  function toggleFavorite(id, e) {
    if (e) e.stopPropagation();
    if (state.favorites.has(id)) {
      state.favorites.delete(id);
    } else {
      state.favorites.add(id);
      playChime(659.25, 0.2); // Mi (E5)
    }
    saveFavorites();
    updateFavoritesBadge(true);
    renderRecipeCards();
    updateModalFavoriteBtn();
    renderFavoritesDrawer();
  }

  function updateFavoritesBadge(animate = false) {
    const count = state.favorites.size;
    DOM.favoritesCounter.textContent = count;
    if (animate) {
      DOM.favoritesCounter.classList.add('bump');
      setTimeout(() => DOM.favoritesCounter.classList.remove('bump'), 400);
    }
  }

  // 4. RENDERIZADO DE FILTROS Y SELECTORES
  function renderZonePills() {
    if (!DOM.zonesCarousel) return;
    DOM.zonesCarousel.innerHTML = '';

    ZONAS_CHILE.forEach(z => {
      const count = z.id === 'all' 
        ? RECETAS_CHILE.length 
        : RECETAS_CHILE.filter(r => r.zone === z.id).length;

      const chip = document.createElement('button');
      chip.className = `zone-chip ${state.filters.zone === z.id ? 'active' : ''}`;
      chip.setAttribute('data-zone', z.id);
      chip.title = z.description;
      chip.innerHTML = `
        <span class="zone-chip-icon">${z.icon}</span>
        <span>${z.name}</span>
        <span class="zone-count">${count}</span>
      `;
      chip.addEventListener('click', () => {
        setFilter('zone', z.id);
      });
      DOM.zonesCarousel.appendChild(chip);
    });
  }

  function renderCategoryPills() {
    if (!DOM.categoryFilterGroup) return;
    DOM.categoryFilterGroup.innerHTML = '';

    CATEGORIAS_PLATILLO.forEach(cat => {
      const btn = document.createElement('button');
      btn.className = `btn-category-pill ${state.filters.category === cat.id ? 'active' : ''}`;
      btn.setAttribute('data-cat', cat.id);
      btn.setAttribute('role', 'tab');
      btn.setAttribute('aria-selected', state.filters.category === cat.id);
      btn.innerHTML = `
        <span>${cat.icon}</span>
        <span>${cat.name}</span>
      `;
      btn.addEventListener('click', () => {
        setFilter('category', cat.id);
      });
      DOM.categoryFilterGroup.appendChild(btn);
    });
  }

  function setFilter(key, val) {
    state.filters[key] = val;
    updateResults();
    renderZonePills();
    renderCategoryPills();
  }

  function resetAllFilters() {
    state.filters = {
      zone: 'all',
      category: 'all',
      difficulty: 'all',
      time: 'all',
      cost: 'all',
      search: '',
      sort: 'featured'
    };
    DOM.searchInput.value = '';
    DOM.selectDifficulty.value = 'all';
    DOM.selectTime.value = 'all';
    if (DOM.selectCost) DOM.selectCost.value = 'all';
    DOM.selectSort.value = 'featured';
    DOM.btnClearSearch.classList.add('hidden');
    updateResults();
    renderZonePills();
    renderCategoryPills();
  }

  // 5. FILTRADO, BÚSQUEDA Y ORDENAMIENTO DE RECETAS
  function getFilteredRecipes() {
    const q = state.filters.search.trim().toLowerCase();

    return RECETAS_CHILE.filter(recipe => {
      // Filtro de Zona
      if (state.filters.zone !== 'all' && recipe.zone !== state.filters.zone) {
        return false;
      }
      // Filtro de Categoría
      if (state.filters.category !== 'all' && recipe.category !== state.filters.category) {
        return false;
      }
      // Filtro de Dificultad
      if (state.filters.difficulty !== 'all' && recipe.difficulty !== state.filters.difficulty) {
        return false;
      }
      // Filtro de Tiempo
      if (state.filters.time !== 'all') {
        const total = recipe.totalTime || (recipe.prepTime + recipe.cookTime);
        if (state.filters.time === 'quick' && total > 45) return false;
        if (state.filters.time === 'medium' && (total <= 45 || total > 90)) return false;
        if (state.filters.time === 'slow' && total <= 90) return false;
      }
      // Filtro de Costo / Presupuesto
      if (state.filters.cost !== 'all' && recipe.estimatedCost) {
        if (recipe.estimatedCost.tier !== state.filters.cost) {
          return false;
        }
      }
      // Búsqueda por texto (nombre, historia, ingredientes o tags)
      if (q) {
        const inName = recipe.name.toLowerCase().includes(q);
        const inTagline = recipe.tagline.toLowerCase().includes(q);
        const inHistory = recipe.history.toLowerCase().includes(q);
        const inTags = recipe.tags.some(t => t.toLowerCase().includes(q));
        const inIngredients = recipe.ingredients.some(ing => ing.name.toLowerCase().includes(q));
        if (!inName && !inTagline && !inHistory && !inTags && !inIngredients) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (state.filters.sort === 'cost-asc') {
        const cA = (a.estimatedCost && a.estimatedCost.perServing) || 0;
        const cB = (b.estimatedCost && b.estimatedCost.perServing) || 0;
        return cA - cB;
      } else if (state.filters.sort === 'cost-desc') {
        const cA = (a.estimatedCost && a.estimatedCost.perServing) || 0;
        const cB = (b.estimatedCost && b.estimatedCost.perServing) || 0;
        return cB - cA;
      } else if (state.filters.sort === 'time-asc') {
        return a.totalTime - b.totalTime;
      } else if (state.filters.sort === 'time-desc') {
        return b.totalTime - a.totalTime;
      } else if (state.filters.sort === 'name-asc') {
        return a.name.localeCompare(b.name, 'es');
      }
      return 0; // featured / natural
    });
  }

  function updateResults() {
    const filtered = getFilteredRecipes();

    // Actualizar Contador
    DOM.resultsCount.innerHTML = `Mostrando <strong>${filtered.length}</strong> de ${RECETAS_CHILE.length} recetas típicas`;

    // Botón Resetear visible si hay filtros activos
    const hasActiveFilters = state.filters.zone !== 'all' ||
      state.filters.category !== 'all' ||
      state.filters.difficulty !== 'all' ||
      state.filters.time !== 'all' ||
      state.filters.cost !== 'all' ||
      state.filters.search !== '' ||
      state.filters.sort !== 'featured';

    if (DOM.btnResetFilters) {
      DOM.btnResetFilters.classList.toggle('hidden', !hasActiveFilters);
    }

    renderActiveTags();
    renderRecipeCards(filtered);
  }

  // 5.1 BÚSQUEDA PREDICTIVA / AUTOCOMPLETADO INTERACTIVO
  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, m => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    }[m]));
  }

  function escapeRegex(str) {
    return String(str).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  function highlightMatch(text, term) {
    if (!term) return escapeHtml(text);
    const regex = new RegExp(`(${escapeRegex(term)})`, 'gi');
    return escapeHtml(text).replace(regex, '<mark class="search-highlight">$1</mark>');
  }

  function renderPredictions(query) {
    if (!DOM.searchPredictionsDropdown || !DOM.searchPredictionsList) return;
    const q = (query || '').trim().toLowerCase();

    if (q.length === 0) {
      hidePredictions();
      return;
    }

    // Filtrar y rankear por relevancia
    const matches = RECETAS_CHILE.map(recipe => {
      let score = 0;
      const nameLower = recipe.name.toLowerCase();
      if (nameLower === q) score += 120;
      else if (nameLower.startsWith(q)) score += 80;
      else if (nameLower.includes(q)) score += 50;

      if (recipe.tagline.toLowerCase().includes(q)) score += 25;
      if (recipe.categoryLabel.toLowerCase().includes(q)) score += 30;
      if (recipe.tags.some(t => t.toLowerCase().includes(q))) score += 25;
      if (recipe.ingredients.some(ing => ing.name.toLowerCase().includes(q))) score += 20;
      if (recipe.history.toLowerCase().includes(q)) score += 10;

      return { recipe, score };
    }).filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .map(item => item.recipe);

    state.currentPredictions = matches.slice(0, 6);
    state.predictiveSelectedIndex = -1;
    DOM.searchPredictionsList.innerHTML = '';

    if (state.currentPredictions.length === 0) {
      const li = document.createElement('li');
      li.className = 'prediction-empty-item';
      li.innerHTML = `
        <span class="empty-icon">🔍</span>
        <div class="empty-desc">
          <p class="empty-msg">No encontramos recetas para "<strong>${escapeHtml(query)}</strong>"</p>
          <div class="quick-suggest-pills">
            <span class="suggest-label">Prueba con:</span>
            <button type="button" class="btn-quick-pill" data-q="Pie de Limón">Pie de Limón</button>
            <button type="button" class="btn-quick-pill" data-q="Lentejas">Lentejas</button>
            <button type="button" class="btn-quick-pill" data-q="Pastel">Pastel</button>
            <button type="button" class="btn-quick-pill" data-q="Empanadas">Empanadas</button>
            <button type="button" class="btn-quick-pill" data-q="Churros">Churros</button>
          </div>
        </div>
      `;

      li.querySelectorAll('.btn-quick-pill').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const word = btn.getAttribute('data-q');
          DOM.searchInput.value = word;
          state.filters.search = word;
          DOM.btnClearSearch.classList.remove('hidden');
          updateResults();
          renderPredictions(word);
        });
      });

      DOM.searchPredictionsList.appendChild(li);
    } else {
      state.currentPredictions.forEach((recipe, idx) => {
        const li = document.createElement('li');
        li.className = 'prediction-item';
        li.setAttribute('role', 'option');
        li.setAttribute('data-index', idx);
        li.setAttribute('data-id', recipe.id);

        const zoneShort = recipe.zoneLabel.split('(')[0].trim();
        const costStr = recipe.estimatedCost ? `~$${recipe.estimatedCost.perServing.toLocaleString('es-CL')} / porc.` : '';

        li.innerHTML = `
          <img src="${recipe.image}" alt="${recipe.name}" class="prediction-img" loading="lazy">
          <div class="prediction-details">
            <div class="prediction-name-row">
              <span class="prediction-name">${highlightMatch(recipe.name, query)}</span>
              <span class="prediction-badge ${recipe.difficulty}">● ${recipe.difficultyLabel}</span>
            </div>
            <div class="prediction-meta-row">
              <span class="prediction-category">${recipe.categoryLabel}</span>
              <span class="prediction-dot">•</span>
              <span class="prediction-zone">${zoneShort}</span>
              <span class="prediction-dot">•</span>
              <span class="prediction-time">⏱️ ${recipe.totalTime}m</span>
              ${costStr ? `
                <span class="prediction-dot">•</span>
                <span class="prediction-cost">💵 ${costStr}</span>
              ` : ''}
            </div>
          </div>
          <span class="prediction-arrow">➔</span>
        `;

        li.addEventListener('click', () => {
          openRecipeModal(recipe.id);
          hidePredictions();
        });

        DOM.searchPredictionsList.appendChild(li);
      });
    }

    DOM.searchPredictionsDropdown.classList.remove('hidden');
  }

  function hidePredictions() {
    if (DOM.searchPredictionsDropdown) {
      DOM.searchPredictionsDropdown.classList.add('hidden');
    }
    state.predictiveSelectedIndex = -1;
  }

  function updatePredictionSelection() {
    const items = DOM.searchPredictionsList.querySelectorAll('.prediction-item');
    items.forEach((item, idx) => {
      if (idx === state.predictiveSelectedIndex) {
        item.classList.add('selected');
        item.scrollIntoView({ block: 'nearest' });
      } else {
        item.classList.remove('selected');
      }
    });
  }

  function renderActiveTags() {
    if (!DOM.activeTagsList) return;
    DOM.activeTagsList.innerHTML = '';

    if (state.filters.zone !== 'all') {
      const z = ZONAS_CHILE.find(item => item.id === state.filters.zone);
      if (z) createActiveTag(`Zona: ${z.name}`, () => setFilter('zone', 'all'));
    }

    if (state.filters.category !== 'all') {
      const c = CATEGORIAS_PLATILLO.find(item => item.id === state.filters.category);
      if (c) createActiveTag(`Tipo: ${c.name}`, () => setFilter('category', 'all'));
    }

    if (state.filters.difficulty !== 'all') {
      const diffMap = { facil: 'Fácil', media: 'Media', dificil: 'Difícil' };
      createActiveTag(`Dificultad: ${diffMap[state.filters.difficulty]}`, () => {
        DOM.selectDifficulty.value = 'all';
        setFilter('difficulty', 'all');
      });
    }

    if (state.filters.time !== 'all') {
      const timeMap = { quick: '≤ 45 min', medium: '45-90 min', slow: '> 90 min' };
      createActiveTag(`Tiempo: ${timeMap[state.filters.time]}`, () => {
        DOM.selectTime.value = 'all';
        setFilter('time', 'all');
      });
    }

    if (state.filters.cost !== 'all') {
      const costMap = {
        economico: 'Económico (≤ $2.000)',
        medio: 'Medio ($2.001 a $4.500)',
        gourmet: 'Gourmet (> $4.500)'
      };
      createActiveTag(`Costo: ${costMap[state.filters.cost] || state.filters.cost}`, () => {
        if (DOM.selectCost) DOM.selectCost.value = 'all';
        setFilter('cost', 'all');
      });
    }

    if (state.filters.search) {
      createActiveTag(`"${state.filters.search}"`, () => {
        state.filters.search = '';
        DOM.searchInput.value = '';
        DOM.btnClearSearch.classList.add('hidden');
        updateResults();
      });
    }
  }

  function createActiveTag(text, onRemove) {
    const tag = document.createElement('span');
    tag.className = 'active-filter-tag';
    tag.innerHTML = `
      <span>${text}</span>
      <span class="tag-remove" title="Quitar filtro">&times;</span>
    `;
    tag.querySelector('.tag-remove').addEventListener('click', onRemove);
    DOM.activeTagsList.appendChild(tag);
  }

  // 6. RENDERIZADO DE TARJETAS DE RECETA
  function renderRecipeCards(recipes = null) {
    if (!DOM.recipesGrid) return;
    const list = recipes || getFilteredRecipes();
    DOM.recipesGrid.innerHTML = '';

    if (list.length === 0) {
      DOM.recipesGrid.classList.add('hidden');
      DOM.emptyState.classList.remove('hidden');
      return;
    }

    DOM.recipesGrid.classList.remove('hidden');
    DOM.emptyState.classList.add('hidden');

    list.forEach(recipe => {
      const isFav = state.favorites.has(recipe.id);
      const zoneInfo = ZONAS_CHILE.find(z => z.id === recipe.zone) || { icon: '🇨🇱', name: recipe.zoneLabel };

      const card = document.createElement('article');
      card.className = 'recipe-card';
      card.setAttribute('data-id', recipe.id);

      card.innerHTML = `
        <div class="card-media">
          <img src="${recipe.image}" alt="${recipe.name}" class="card-img" loading="lazy">
          <div class="card-media-overlay"></div>
          <span class="card-zone-badge">${zoneInfo.icon} ${recipe.zoneLabel.split('(')[0].trim()}</span>
          <button class="btn-card-favorite ${isFav ? 'is-favorite' : ''}" aria-label="Guardar en favoritos" title="${isFav ? 'Quitar de favoritos' : 'Guardar en favoritos'}">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="${isFav ? '#E63946' : 'none'}" stroke="currentColor" stroke-width="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
        </div>

        <div class="card-body">
          <div class="card-meta-row">
            <span class="meta-category">${recipe.categoryLabel}</span>
            <span class="meta-difficulty ${recipe.difficulty}">
              ● ${recipe.difficultyLabel}
            </span>
          </div>

          <h3 class="card-title">${recipe.name}</h3>
          <p class="card-tagline">${recipe.tagline}</p>

          <div class="card-timing-box">
            <div class="timing-item" title="Tiempo de preparación">
              <span>🔪 Prep:</span>
              <strong>${recipe.prepTime}m</strong>
            </div>
            <div class="timing-item" title="Tiempo de cocción">
              <span>🔥 Cocción:</span>
              <strong>${recipe.cookTime}m</strong>
            </div>
            <div class="timing-item" title="Tiempo total">
              <span>⏱️ Total:</span>
              <strong>${recipe.totalTime}m</strong>
            </div>
          </div>

          ${recipe.estimatedCost ? `
            <div class="card-cost-row" title="${recipe.estimatedCost.note}">
              <div class="cost-pill ${recipe.estimatedCost.tier}">
                <span class="cost-currency-symbol">💵</span>
                <span class="cost-amount">~$${recipe.estimatedCost.perServing.toLocaleString('es-CL')} / porc.</span>
              </div>
              <span class="cost-tier-tag ${recipe.estimatedCost.tier}">${recipe.estimatedCost.tierLabel}</span>
            </div>
          ` : ''}

          <div class="card-footer">
            <span class="card-servings">
              👥 Base ${recipe.servingsBase} porciones
            </span>
            <button class="btn-view-recipe">
              <span>Ver Receta</span>
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>
      `;

      // Eventos de la tarjeta
      const favBtn = card.querySelector('.btn-card-favorite');
      favBtn.addEventListener('click', (e) => toggleFavorite(recipe.id, e));

      card.addEventListener('click', () => openRecipeModal(recipe.id));

      DOM.recipesGrid.appendChild(card);
    });
  }

  // 7. MODAL DETALLADO DE RECETA
  function openRecipeModal(recipeId) {
    const recipe = RECETAS_CHILE.find(r => r.id === recipeId);
    if (!recipe) return;

    state.currentRecipe = recipe;
    state.currentServings = recipe.servingsBase;
    state.checkedIngredients.clear();
    state.completedSteps.clear();

    // Rellenar contenido
    DOM.modalRecipeImage.src = recipe.image;
    DOM.modalRecipeImage.alt = recipe.name;
    DOM.modalZoneBadge.textContent = recipe.zoneLabel;
    DOM.modalCategoryBadge.textContent = recipe.categoryLabel;
    DOM.modalDifficultyBadge.textContent = `Dificultad: ${recipe.difficultyLabel}`;
    DOM.modalRecipeTitle.textContent = recipe.name;
    DOM.modalRecipeTagline.textContent = recipe.tagline;

    DOM.modalPrepTime.textContent = `${recipe.prepTime} min`;
    DOM.modalCookTime.textContent = `${recipe.cookTime} min`;
    DOM.modalTotalTime.textContent = `${recipe.totalTime} min`;

    if (recipe.estimatedCost) {
      if (DOM.modalCostPerServing) {
        DOM.modalCostPerServing.textContent = `~$${recipe.estimatedCost.perServing.toLocaleString('es-CL')} / porc.`;
      }
      if (DOM.modalCostTierBadge) {
        DOM.modalCostTierBadge.textContent = recipe.estimatedCost.tierLabel;
        DOM.modalCostTierBadge.className = `cost-tier-pill ${recipe.estimatedCost.tier}`;
      }
      if (DOM.modalCostServing) {
        DOM.modalCostServing.textContent = `~$${recipe.estimatedCost.perServing.toLocaleString('es-CL')} CLP`;
      }
      if (DOM.modalCostNote) {
        DOM.modalCostNote.textContent = recipe.estimatedCost.note || 'Calculado a precios de ferias libres y carnicerías locales.';
      }
    }

    DOM.modalRecipeHistory.textContent = recipe.history;
    DOM.modalGrandmasSecret.textContent = recipe.grandmasSecret;
    DOM.modalWinePairing.textContent = recipe.winePairing;

    // Servings & Ingredientes
    updateServingsUI();
    renderModalIngredients();
    renderModalSteps();
    updateModalFavoriteBtn();

    // Mostrar modal
    DOM.modalBackdrop.classList.remove('hidden');
    DOM.body.style.overflow = 'hidden';
    const modalCard = document.getElementById('recipeModalCard');
    if (modalCard) modalCard.scrollTop = 0;
    DOM.modalBackdrop.scrollTop = 0;
  }

  function closeRecipeModal() {
    DOM.modalBackdrop.classList.add('hidden');
    DOM.body.style.overflow = '';
  }

  function updateModalFavoriteBtn() {
    if (!state.currentRecipe) return;
    const isFav = state.favorites.has(state.currentRecipe.id);
    DOM.btnModalFavorite.classList.toggle('active-fav', isFav);
    DOM.modalFavHeart.setAttribute('fill', isFav ? '#E63946' : 'none');
    DOM.modalFavText.textContent = isFav ? 'En Favoritos' : 'Favorito';
  }

  // Escalador de porciones dinámico
  function changePortions(delta) {
    const next = state.currentServings + delta;
    if (next < 1 || next > 24) return;
    state.currentServings = next;
    updateServingsUI();
    renderModalIngredients();
    renderKitchenIngredientsDrawer();
  }

  function updateServingsUI() {
    DOM.servingsDisplay.textContent = state.currentServings;

    // Recálculo dinámico de costo total según comensales
    if (state.currentRecipe && state.currentRecipe.estimatedCost) {
      const perServing = state.currentRecipe.estimatedCost.perServing;
      const totalScaled = Math.round(perServing * state.currentServings);
      if (DOM.modalCostServingsCount) {
        DOM.modalCostServingsCount.textContent = state.currentServings;
      }
      if (DOM.modalCostTotal) {
        DOM.modalCostTotal.textContent = `$${totalScaled.toLocaleString('es-CL')} CLP`;
      }
    }
  }

  function formatScaledQuantity(baseQty, baseServings, currentServings) {
    if (!baseQty) return '';
    const scaled = (baseQty * currentServings) / baseServings;
    // Si es casi entero
    if (Math.abs(Math.round(scaled) - scaled) < 0.05) {
      return Math.round(scaled);
    }
    // Formato con decimal limpio (ej: 1.5, 0.25)
    return parseFloat(scaled.toFixed(1));
  }

  function renderModalIngredients() {
    if (!state.currentRecipe || !DOM.modalIngredientsList) return;
    DOM.modalIngredientsList.innerHTML = '';

    state.currentRecipe.ingredients.forEach((ing, index) => {
      const scaledQty = formatScaledQuantity(ing.quantity, state.currentRecipe.servingsBase, state.currentServings);
      const isChecked = state.checkedIngredients.has(index);

      const li = document.createElement('li');
      li.className = `ingredient-row ${isChecked ? 'checked-item' : ''}`;
      li.innerHTML = `
        <input type="checkbox" class="ingredient-checkbox" ${isChecked ? 'checked' : ''} aria-label="Marcar ${ing.name}">
        <span>
          <strong class="ingredient-qty">${scaledQty}</strong> ${ing.unit ? ing.unit : ''} 
          ${ing.name} ${ing.note ? `<small style="color: var(--text-subtle);">(${ing.note})</small>` : ''}
        </span>
      `;

      li.addEventListener('click', (e) => {
        if (e.target.tagName !== 'INPUT') {
          const chk = li.querySelector('.ingredient-checkbox');
          chk.checked = !chk.checked;
        }
        const chk = li.querySelector('.ingredient-checkbox');
        if (chk.checked) {
          state.checkedIngredients.add(index);
          li.classList.add('checked-item');
        } else {
          state.checkedIngredients.delete(index);
          li.classList.remove('checked-item');
        }
      });

      DOM.modalIngredientsList.appendChild(li);
    });
  }

  function renderModalSteps() {
    if (!state.currentRecipe || !DOM.modalStepsList) return;
    DOM.modalStepsList.innerHTML = '';

    state.currentRecipe.instructions.forEach((stepItem) => {
      const isDone = state.completedSteps.has(stepItem.step);

      const li = document.createElement('li');
      li.className = `step-item ${isDone ? 'completed' : ''}`;
      li.innerHTML = `
        <button class="step-check-trigger" title="Marcar paso ${stepItem.step} como terminado">
          ${isDone ? '✓' : stepItem.step}
        </button>
        <div class="step-content-box">
          <div class="step-heading-row">
            <h4 class="step-title">${stepItem.title}</h4>
            <div class="step-meta-badges">
              ${stepItem.timeMinutes ? `<span class="step-time-pill" title="Tiempo de esta etapa">⏱️ ${stepItem.timeMinutes} min</span>` : ''}
              ${stepItem.technique ? `<span class="step-technique-pill" title="Técnica culinaria">🔥 ${stepItem.technique}</span>` : ''}
            </div>
          </div>
          <p class="step-description">${stepItem.text}</p>
          ${stepItem.tip ? `
            <div class="step-tip-callout">
              <span>💡</span>
              <em>${stepItem.tip}</em>
            </div>
          ` : ''}
        </div>
      `;

      const btnCheck = li.querySelector('.step-check-trigger');
      btnCheck.addEventListener('click', () => {
        if (state.completedSteps.has(stepItem.step)) {
          state.completedSteps.delete(stepItem.step);
          li.classList.remove('completed');
          btnCheck.textContent = stepItem.step;
        } else {
          state.completedSteps.add(stepItem.step);
          li.classList.add('completed');
          btnCheck.textContent = '✓';
          playChime(523.25, 0.15); // Do
        }
      });

      DOM.modalStepsList.appendChild(li);
    });
  }

  // 8. PANTALLA COMPLETA: MODO COCINA (KITCHEN MODE)
  function openKitchenMode() {
    if (!state.currentRecipe) return;
    state.kitchenStepIndex = 0;
    DOM.kitchenRecipeTitle.textContent = state.currentRecipe.name;
    renderKitchenStep();
    renderKitchenIngredientsDrawer();
    DOM.kitchenModeOverlay.classList.remove('hidden');
    DOM.body.style.overflow = 'hidden';
  }

  function closeKitchenMode() {
    DOM.kitchenModeOverlay.classList.add('hidden');
    DOM.kitchenIngredientsDrawer.classList.add('hidden');
  }

  function renderKitchenStep() {
    if (!state.currentRecipe) return;
    const steps = state.currentRecipe.instructions;
    const current = steps[state.kitchenStepIndex];
    if (!current) return;

    // Actualizar textos y badges de etapa
    const metaParts = [`Paso ${current.step} de ${steps.length}`];
    if (current.timeMinutes) metaParts.push(`⏱️ ${current.timeMinutes} min`);
    if (current.technique) metaParts.push(`🔥 ${current.technique}`);
    DOM.kitchenStepBadge.textContent = metaParts.join(' • ');

    DOM.kitchenStepTitle.textContent = current.title;
    DOM.kitchenStepText.textContent = current.text;

    if (current.tip) {
      DOM.kitchenStepTipBox.classList.remove('hidden');
      DOM.kitchenStepTip.textContent = current.tip;
    } else {
      DOM.kitchenStepTipBox.classList.add('hidden');
    }

    // Botón directo para sincronizar temporizador con este paso
    if (DOM.btnSetStepTimer) {
      if (current.timeMinutes && current.timeMinutes > 0) {
        DOM.btnSetStepTimer.classList.remove('hidden');
        DOM.btnSetStepTimer.innerHTML = `<span>⏱️ Iniciar Temporizador de este paso (${current.timeMinutes} min)</span>`;
        DOM.btnSetStepTimer.onclick = () => {
          state.timer.secondsRemaining = current.timeMinutes * 60;
          state.timer.totalSeconds = state.timer.secondsRemaining;
          updateTimerDisplay();
          startTimer();
          playChime(659.25, 0.2);
          DOM.timerClock.scrollIntoView({ behavior: 'smooth', block: 'center' });
        };
      } else {
        DOM.btnSetStepTimer.classList.add('hidden');
      }
    }

    // Progreso
    const percent = ((state.kitchenStepIndex + 1) / steps.length) * 100;
    DOM.kitchenProgressFill.style.width = `${percent}%`;

    // Botones prev / next
    DOM.btnKitchenPrev.disabled = state.kitchenStepIndex === 0;
    DOM.btnKitchenNext.disabled = state.kitchenStepIndex === steps.length - 1;

    // Dots indicadores
    DOM.kitchenStepDots.innerHTML = '';
    steps.forEach((st, idx) => {
      const dot = document.createElement('span');
      dot.className = `step-dot ${idx === state.kitchenStepIndex ? 'active' : ''} ${idx < state.kitchenStepIndex ? 'done' : ''}`;
      dot.title = `Paso ${idx + 1}: ${st.title} (${st.timeMinutes || 0} min)`;
      dot.addEventListener('click', () => {
        state.kitchenStepIndex = idx;
        renderKitchenStep();
      });
      DOM.kitchenStepDots.appendChild(dot);
    });
  }

  function nextKitchenStep() {
    if (!state.currentRecipe) return;
    if (state.kitchenStepIndex < state.currentRecipe.instructions.length - 1) {
      state.kitchenStepIndex++;
      renderKitchenStep();
    }
  }

  function prevKitchenStep() {
    if (state.kitchenStepIndex > 0) {
      state.kitchenStepIndex--;
      renderKitchenStep();
    }
  }

  function renderKitchenIngredientsDrawer() {
    if (!state.currentRecipe || !DOM.kitchenDrawerList) return;
    DOM.kitchenDrawerList.innerHTML = '';

    state.currentRecipe.ingredients.forEach(ing => {
      const scaledQty = formatScaledQuantity(ing.quantity, state.currentRecipe.servingsBase, state.currentServings);
      const li = document.createElement('li');
      li.style.fontSize = '0.95rem';
      li.style.padding = '0.4rem 0';
      li.style.borderBottom = '1px solid var(--border-color)';
      li.innerHTML = `
        <strong style="color: var(--c-terracotta);">${scaledQty} ${ing.unit || ''}</strong> 
        <span>${ing.name}</span>
      `;
      DOM.kitchenDrawerList.appendChild(li);
    });
  }

  // 9. TEMPORIZADOR DE COCINA INTEGRADO
  function formatTimerString(seconds) {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  }

  function updateTimerDisplay() {
    DOM.timerClock.textContent = formatTimerString(state.timer.secondsRemaining);
  }

  function toggleTimer() {
    if (state.timer.isRunning) {
      pauseTimer();
    } else {
      startTimer();
    }
  }

  function startTimer() {
    if (state.timer.secondsRemaining <= 0) return;
    state.timer.isRunning = true;
    DOM.btnTimerToggle.textContent = 'Pausar';
    DOM.btnTimerToggle.style.background = 'var(--c-wine)';

    state.timer.intervalId = setInterval(() => {
      state.timer.secondsRemaining--;
      updateTimerDisplay();

      if (state.timer.secondsRemaining <= 0) {
        clearInterval(state.timer.intervalId);
        state.timer.isRunning = false;
        DOM.btnTimerToggle.textContent = 'Iniciar';
        DOM.btnTimerToggle.style.background = 'var(--c-terracotta)';
        timerFinishedAlert();
      }
    }, 1000);
  }

  function pauseTimer() {
    clearInterval(state.timer.intervalId);
    state.timer.isRunning = false;
    DOM.btnTimerToggle.textContent = 'Reanudar';
    DOM.btnTimerToggle.style.background = 'var(--c-terracotta)';
  }

  function resetTimer() {
    clearInterval(state.timer.intervalId);
    state.timer.isRunning = false;
    state.timer.secondsRemaining = state.timer.totalSeconds;
    DOM.btnTimerToggle.textContent = 'Iniciar';
    DOM.btnTimerToggle.style.background = 'var(--c-terracotta)';
    updateTimerDisplay();
  }

  function addTimerMinutes(mins) {
    const secs = mins * 60;
    state.timer.secondsRemaining += secs;
    state.timer.totalSeconds = state.timer.secondsRemaining;
    updateTimerDisplay();
  }

  function timerFinishedAlert() {
    // Tocar campana triple
    playChime(880, 0.4);
    setTimeout(() => playChime(880, 0.4), 500);
    setTimeout(() => playChime(1174.66, 0.6), 1000);

    alert('⏱️ ¡Tiempo cumplido en tu preparación! Revisa tu receta.');
  }

  // 10. DRAWER LATERAL DE FAVORITOS
  function openFavoritesDrawer() {
    renderFavoritesDrawer();
    DOM.favoritesBackdrop.classList.remove('hidden');
    DOM.body.style.overflow = 'hidden';
  }

  function closeFavoritesDrawer() {
    DOM.favoritesBackdrop.classList.add('hidden');
    DOM.body.style.overflow = '';
  }

  function renderFavoritesDrawer() {
    if (!DOM.favoritesList) return;
    DOM.favoritesList.innerHTML = '';

    const favList = RECETAS_CHILE.filter(r => state.favorites.has(r.id));

    if (favList.length === 0) {
      DOM.favoritesList.classList.add('hidden');
      DOM.favoritesEmpty.classList.remove('hidden');
      return;
    }

    DOM.favoritesList.classList.remove('hidden');
    DOM.favoritesEmpty.classList.add('hidden');

    favList.forEach(rec => {
      const item = document.createElement('div');
      item.className = 'fav-item-card';
      item.innerHTML = `
        <img src="${rec.image}" alt="${rec.name}" class="fav-thumb" loading="lazy">
        <div class="fav-info">
          <span class="fav-zone">${rec.zoneLabel.split('(')[0]}</span>
          <h4 class="fav-title">${rec.name}</h4>
          <span class="fav-time">⏱️ ${rec.totalTime} min • ${rec.difficultyLabel}</span>
        </div>
        <button class="btn-remove-fav" title="Quitar de favoritos" aria-label="Quitar de favoritos">&times;</button>
      `;

      item.querySelector('.fav-title').addEventListener('click', () => {
        closeFavoritesDrawer();
        openRecipeModal(rec.id);
      });

      item.querySelector('.fav-thumb').addEventListener('click', () => {
        closeFavoritesDrawer();
        openRecipeModal(rec.id);
      });

      item.querySelector('.btn-remove-fav').addEventListener('click', (e) => {
        e.stopPropagation();
        toggleFavorite(rec.id);
      });

      DOM.favoritesList.appendChild(item);
    });
  }

  // 11. REGISTRO DE TODOS LOS EVENT LISTENERS
  function setupEventListeners() {
    // Tema Claro / Oscuro
    DOM.btnToggleTheme.addEventListener('click', toggleTheme);

    // Búsqueda en Vivo y Predictiva
    DOM.searchInput.addEventListener('input', (e) => {
      const val = e.target.value;
      state.filters.search = val;
      DOM.btnClearSearch.classList.toggle('hidden', !val);
      updateResults();
      renderPredictions(val);
    });

    DOM.searchInput.addEventListener('focus', () => {
      if (DOM.searchInput.value.trim().length > 0) {
        renderPredictions(DOM.searchInput.value);
      }
    });

    DOM.searchInput.addEventListener('keydown', (e) => {
      const isDropdownOpen = DOM.searchPredictionsDropdown && !DOM.searchPredictionsDropdown.classList.contains('hidden');

      if (e.key === 'ArrowDown') {
        if (!isDropdownOpen && DOM.searchInput.value.trim().length > 0) {
          renderPredictions(DOM.searchInput.value);
          e.preventDefault();
          return;
        }
        if (state.currentPredictions.length > 0) {
          e.preventDefault();
          state.predictiveSelectedIndex = (state.predictiveSelectedIndex + 1) % state.currentPredictions.length;
          updatePredictionSelection();
        }
      } else if (e.key === 'ArrowUp') {
        if (isDropdownOpen && state.currentPredictions.length > 0) {
          e.preventDefault();
          state.predictiveSelectedIndex = (state.predictiveSelectedIndex - 1 + state.currentPredictions.length) % state.currentPredictions.length;
          updatePredictionSelection();
        }
      } else if (e.key === 'Enter') {
        if (isDropdownOpen && state.currentPredictions.length > 0) {
          e.preventDefault();
          const targetIndex = state.predictiveSelectedIndex >= 0 ? state.predictiveSelectedIndex : 0;
          const targetRecipe = state.currentPredictions[targetIndex];
          if (targetRecipe) {
            openRecipeModal(targetRecipe.id);
            hidePredictions();
          }
        }
      } else if (e.key === 'Escape') {
        hidePredictions();
        DOM.searchInput.blur();
      }
    });

    DOM.btnClearSearch.addEventListener('click', () => {
      DOM.searchInput.value = '';
      state.filters.search = '';
      DOM.btnClearSearch.classList.add('hidden');
      hidePredictions();
      DOM.searchInput.focus();
      updateResults();
    });

    // Cerrar sugerencias al hacer clic fuera del buscador
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.hero-search-wrapper')) {
        hidePredictions();
      }
    });

    // Selectores de Dificultad, Tiempo y Ordenamiento
    DOM.selectDifficulty.addEventListener('change', (e) => {
      setFilter('difficulty', e.target.value);
    });

    DOM.selectTime.addEventListener('change', (e) => {
      setFilter('time', e.target.value);
    });

    if (DOM.selectCost) {
      DOM.selectCost.addEventListener('change', (e) => {
        setFilter('cost', e.target.value);
      });
    }

    DOM.selectSort.addEventListener('change', (e) => {
      state.filters.sort = e.target.value;
      updateResults();
    });

    // Botones de Reset
    DOM.btnResetFilters.addEventListener('click', resetAllFilters);
    DOM.btnResetEmpty.addEventListener('click', resetAllFilters);

    // Modal de Receta
    DOM.btnModalClose.addEventListener('click', closeRecipeModal);
    DOM.modalBackdrop.addEventListener('click', (e) => {
      if (e.target === DOM.modalBackdrop) closeRecipeModal();
    });

    DOM.btnPortionMinus.addEventListener('click', () => changePortions(-1));
    DOM.btnPortionPlus.addEventListener('click', () => changePortions(1));

    DOM.btnModalFavorite.addEventListener('click', () => {
      if (state.currentRecipe) {
        toggleFavorite(state.currentRecipe.id);
      }
    });

    DOM.btnModalPrint.addEventListener('click', () => {
      window.print();
    });

    DOM.btnOpenKitchenMode.addEventListener('click', openKitchenMode);

    // Modo Cocina Controls
    DOM.btnCloseKitchenMode.addEventListener('click', closeKitchenMode);
    DOM.btnKitchenPrev.addEventListener('click', prevKitchenStep);
    DOM.btnKitchenNext.addEventListener('click', nextKitchenStep);

    DOM.btnKitchenIngredientsToggle.addEventListener('click', () => {
      DOM.kitchenIngredientsDrawer.classList.toggle('hidden');
    });
    DOM.btnCloseKitchenDrawer.addEventListener('click', () => {
      DOM.kitchenIngredientsDrawer.classList.add('hidden');
    });

    // Temporizador
    DOM.btnTimerToggle.addEventListener('click', toggleTimer);
    DOM.btnTimerReset.addEventListener('click', resetTimer);

    document.querySelectorAll('.btn-timer-preset').forEach(btn => {
      btn.addEventListener('click', () => {
        const mins = parseInt(btn.getAttribute('data-minutes'), 10);
        addTimerMinutes(mins);
      });
    });

    // Favoritos Drawer
    DOM.btnOpenFavorites.addEventListener('click', openFavoritesDrawer);
    DOM.btnCloseFavorites.addEventListener('click', closeFavoritesDrawer);
    DOM.favoritesBackdrop.addEventListener('click', (e) => {
      if (e.target === DOM.favoritesBackdrop) closeFavoritesDrawer();
    });

    // Enlaces de Footer de Zonas y Categorías
    document.querySelectorAll('.footer-zone-link').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const zone = link.getAttribute('data-zone');
        setFilter('zone', zone);
        window.scrollTo({ top: DOM.zonesCarousel.offsetTop - 100, behavior: 'smooth' });
      });
    });

    document.querySelectorAll('.footer-cat-link').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const cat = link.getAttribute('data-cat');
        setFilter('category', cat);
        window.scrollTo({ top: DOM.categoryFilterGroup.offsetTop - 100, behavior: 'smooth' });
      });
    });

    // Atajos de Teclado
    document.addEventListener('keydown', (e) => {
      // Escape cierra modales
      if (e.key === 'Escape') {
        if (!DOM.kitchenModeOverlay.classList.contains('hidden')) {
          closeKitchenMode();
        } else if (!DOM.modalBackdrop.classList.contains('hidden')) {
          closeRecipeModal();
        } else if (!DOM.favoritesBackdrop.classList.contains('hidden')) {
          closeFavoritesDrawer();
        }
      }

      // Flechas en Modo Cocina
      if (!DOM.kitchenModeOverlay.classList.contains('hidden')) {
        if (e.key === 'ArrowRight') nextKitchenStep();
        if (e.key === 'ArrowLeft') prevKitchenStep();
      }

      // Tecla '/' enfoca búsqueda si no está dentro de un input
      if (e.key === '/' && document.activeElement !== DOM.searchInput) {
        e.preventDefault();
        DOM.searchInput.focus();
        DOM.searchInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  }

  // EJECUCIÓN AL CARGAR DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
