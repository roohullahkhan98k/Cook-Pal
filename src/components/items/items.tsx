import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faStar } from '@fortawesome/free-solid-svg-icons';
import styles from './Item.module.css';
import ApiEndpoints from '../../models/api.enums';
import { Recipe } from '../../models/interfaces';

const fetchRecipes = async () => {
    const response = await fetch(ApiEndpoints.RECIPES);
  return response.json();
};

const Item = () => {
  const { data, error, isLoading } = useQuery('recipes', fetchRecipes);
  const { mealType = 'all' } = useParams<{ mealType: string }>();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error instanceof Error ? error.message : 'Unknown error'}</div>;

  const filteredRecipes = mealType && mealType.trim() !== ''
    ? (mealType === 'all'
      ? data.recipes
      : data.recipes.filter((recipe: Recipe) =>
          recipe.mealType.includes(mealType.charAt(0).toUpperCase() + mealType.slice(1).toLowerCase())
        )
      )
    : [];

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe: Recipe) => (
            <div key={recipe.id} className={styles.card}>
              <Link key={recipe.id} to={`/item/${recipe.id}`} className={styles.cardLink}>
                <div className={styles.imageContainer}>
                  <img src={recipe.image} alt={recipe.name} className={styles.image} />
                  <p className={styles.cuisine}>{recipe.cuisine}</p>
                </div>
                <div className={styles.info}>
                  <div className={styles.titleRow}>
                    <h4>{recipe.name}</h4>
                    <p className={styles.reviews}>Reviews: {recipe.reviewCount}</p>
                  </div>
                  <div className={styles.details}>
                    <p className={styles.detailRow}>
                      <span>
                        <FontAwesomeIcon icon={faClock} />
                        &nbsp;&nbsp;{recipe.cookTimeMinutes} minutes
                      </span>
                      <span className={styles.mealType}>
                        {recipe.mealType.join(', ')}
                      </span>
                    </p>
                  </div>
                  <div className={styles.ratingContainer}>
                    <div className={styles.rating}>
                      {Array(Math.floor(recipe.rating)).fill(0).map((_, i) => (
                        <FontAwesomeIcon key={i} icon={faStar} color="#000000" />
                      ))}
                      {recipe.rating % 1 !== 0 && (
                        <FontAwesomeIcon icon={faStar} color="#000000" style={{ opacity: 0.5 }} />
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <p>No recipes found for {mealType}</p>
        )}
      </div>
    </div>
  );
};

export default Item;