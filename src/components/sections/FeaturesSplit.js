import React from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../../utils/SectionProps";

const propTypes = {
  ...SectionSplitProps.types,
};

const defaultProps = {
  ...SectionSplitProps.defaults,
};

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {
  const outerClasses = classNames(
    "features-split section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-split-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const splitClasses = classNames(
    "split-wrap",
    invertMobile && "invert-mobile",
    invertDesktop && "invert-desktop",
    alignTop && "align-top"
  );

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <div className={splitClasses}>
            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Количество и качество
                </div>
                <h3 className="mt-0 mb-12">Огромное число курсов</h3>
                <p className="m-0">
                  Различные курсы на интересные тематики, связанные с программированием, логикой и основой алгоритмизации. Курсы имеют разный уровень сложности, что не даст вам заскучать. 
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <div className="course-card--wrapper">
                  <div className="course-gradient-line" />
                  <div className="course-content-wrapper">
                    <div className="course-title">Логические выражения</div>
                    <div className="course-annatation">
                      В этом курсе вы узнаете что такое логические выражние.
                      Основы логики и все что с ней связано.
                    </div>
                    <div className="course-bottom-wrapper">
                      <div className="lesson-done">2</div>
                      <div className="completed-text">пройдено 2 из 10</div>
                      <div className="course-button-wrapper">
                        <span className="course-button">Продолжить</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-right"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Интересно и быстро
                </div>
                <h3 className="mt-0 mb-12">Проходи уроки максимально полезно</h3>
                <p className="m-0">
                  Уроки содержат различные задания, начиная от тестовых, заканчивая составлением логических выражений. Разный уровень сложности не даст заскучать и продвинутым ребятам.
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <div className="lesson-wrapper">
                  <div className="lesson-title">Логические выражения</div>
                  <div className="lesson-desc">Здесь вы узнаете все о логических выражениях</div>
                  <div className="page-done-wrapper">
                    <div className="page-item-done"> оператор и </div>
                    <div className="page-item-done"> оператор или </div>
                    <div className="page-item-undone"> оператор не </div>
                  </div>
                  <div className="lesson-bottom-wrapper">
                    <div className="lesson-button">Продолжить</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Весело и захватывающе 
                </div>
                <h3 className="mt-0 mb-12">Куда без игр</h3>
                <p className="m-0">
                  Участвуй в дуэлях с другими пользователями, совершествуй свои знания и получай очки. Войди в список лучших знатоков LEARNIK.
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <div className="achievements-wrapper">
                  <div className="achievements-svg" />
                  <div className="achievements-title">Начало положено</div>
                  <div className="achievements-desc">Пройти первый урок </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
