export interface RouterOptions {
  /**
   * Enable case sensitivity.
   */
  caseSensitive?: boolean | undefined;

  /**
   * Preserve the req.params values from the parent router.
   * If the parent and the child have conflicting param names, the child’s value take precedence.
   *
   * @default false
   * @since 4.5.0
   */
  mergeParams?: boolean | undefined;

  /**
   * Enable strict routing.
   */
  strict?: boolean | undefined;
}


export default RouterOptions