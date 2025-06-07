
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Problem
 * 
 */
export type Problem = $Result.DefaultSelection<Prisma.$ProblemPayload>
/**
 * Model Submission
 * 
 */
export type Submission = $Result.DefaultSelection<Prisma.$SubmissionPayload>
/**
 * Model TestCaseResult
 * 
 */
export type TestCaseResult = $Result.DefaultSelection<Prisma.$TestCaseResultPayload>
/**
 * Model ProblemSolved
 * 
 */
export type ProblemSolved = $Result.DefaultSelection<Prisma.$ProblemSolvedPayload>
/**
 * Model Playlist
 * 
 */
export type Playlist = $Result.DefaultSelection<Prisma.$PlaylistPayload>
/**
 * Model ProblemInPlaylist
 * 
 */
export type ProblemInPlaylist = $Result.DefaultSelection<Prisma.$ProblemInPlaylistPayload>
/**
 * Model Sheet
 * 
 */
export type Sheet = $Result.DefaultSelection<Prisma.$SheetPayload>
/**
 * Model ProblemInSheet
 * 
 */
export type ProblemInSheet = $Result.DefaultSelection<Prisma.$ProblemInSheetPayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  ADMIN: 'ADMIN',
  USER: 'USER'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const Difficulty: {
  EASY: 'EASY',
  HARD: 'HARD',
  MEDIUM: 'MEDIUM'
};

export type Difficulty = (typeof Difficulty)[keyof typeof Difficulty]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type Difficulty = $Enums.Difficulty

export const Difficulty: typeof $Enums.Difficulty

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.problem`: Exposes CRUD operations for the **Problem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Problems
    * const problems = await prisma.problem.findMany()
    * ```
    */
  get problem(): Prisma.ProblemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.submission`: Exposes CRUD operations for the **Submission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Submissions
    * const submissions = await prisma.submission.findMany()
    * ```
    */
  get submission(): Prisma.SubmissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.testCaseResult`: Exposes CRUD operations for the **TestCaseResult** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TestCaseResults
    * const testCaseResults = await prisma.testCaseResult.findMany()
    * ```
    */
  get testCaseResult(): Prisma.TestCaseResultDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.problemSolved`: Exposes CRUD operations for the **ProblemSolved** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProblemSolveds
    * const problemSolveds = await prisma.problemSolved.findMany()
    * ```
    */
  get problemSolved(): Prisma.ProblemSolvedDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.playlist`: Exposes CRUD operations for the **Playlist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Playlists
    * const playlists = await prisma.playlist.findMany()
    * ```
    */
  get playlist(): Prisma.PlaylistDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.problemInPlaylist`: Exposes CRUD operations for the **ProblemInPlaylist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProblemInPlaylists
    * const problemInPlaylists = await prisma.problemInPlaylist.findMany()
    * ```
    */
  get problemInPlaylist(): Prisma.ProblemInPlaylistDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sheet`: Exposes CRUD operations for the **Sheet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sheets
    * const sheets = await prisma.sheet.findMany()
    * ```
    */
  get sheet(): Prisma.SheetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.problemInSheet`: Exposes CRUD operations for the **ProblemInSheet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProblemInSheets
    * const problemInSheets = await prisma.problemInSheet.findMany()
    * ```
    */
  get problemInSheet(): Prisma.ProblemInSheetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Problem: 'Problem',
    Submission: 'Submission',
    TestCaseResult: 'TestCaseResult',
    ProblemSolved: 'ProblemSolved',
    Playlist: 'Playlist',
    ProblemInPlaylist: 'ProblemInPlaylist',
    Sheet: 'Sheet',
    ProblemInSheet: 'ProblemInSheet',
    Order: 'Order'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "problem" | "submission" | "testCaseResult" | "problemSolved" | "playlist" | "problemInPlaylist" | "sheet" | "problemInSheet" | "order"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Problem: {
        payload: Prisma.$ProblemPayload<ExtArgs>
        fields: Prisma.ProblemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProblemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProblemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>
          }
          findFirst: {
            args: Prisma.ProblemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProblemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>
          }
          findMany: {
            args: Prisma.ProblemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>[]
          }
          create: {
            args: Prisma.ProblemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>
          }
          createMany: {
            args: Prisma.ProblemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProblemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>[]
          }
          delete: {
            args: Prisma.ProblemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>
          }
          update: {
            args: Prisma.ProblemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>
          }
          deleteMany: {
            args: Prisma.ProblemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProblemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProblemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>[]
          }
          upsert: {
            args: Prisma.ProblemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>
          }
          aggregate: {
            args: Prisma.ProblemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProblem>
          }
          groupBy: {
            args: Prisma.ProblemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProblemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProblemCountArgs<ExtArgs>
            result: $Utils.Optional<ProblemCountAggregateOutputType> | number
          }
        }
      }
      Submission: {
        payload: Prisma.$SubmissionPayload<ExtArgs>
        fields: Prisma.SubmissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubmissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubmissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          findFirst: {
            args: Prisma.SubmissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubmissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          findMany: {
            args: Prisma.SubmissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>[]
          }
          create: {
            args: Prisma.SubmissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          createMany: {
            args: Prisma.SubmissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubmissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>[]
          }
          delete: {
            args: Prisma.SubmissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          update: {
            args: Prisma.SubmissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          deleteMany: {
            args: Prisma.SubmissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubmissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubmissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>[]
          }
          upsert: {
            args: Prisma.SubmissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          aggregate: {
            args: Prisma.SubmissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubmission>
          }
          groupBy: {
            args: Prisma.SubmissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubmissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubmissionCountArgs<ExtArgs>
            result: $Utils.Optional<SubmissionCountAggregateOutputType> | number
          }
        }
      }
      TestCaseResult: {
        payload: Prisma.$TestCaseResultPayload<ExtArgs>
        fields: Prisma.TestCaseResultFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TestCaseResultFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCaseResultPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TestCaseResultFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCaseResultPayload>
          }
          findFirst: {
            args: Prisma.TestCaseResultFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCaseResultPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TestCaseResultFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCaseResultPayload>
          }
          findMany: {
            args: Prisma.TestCaseResultFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCaseResultPayload>[]
          }
          create: {
            args: Prisma.TestCaseResultCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCaseResultPayload>
          }
          createMany: {
            args: Prisma.TestCaseResultCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TestCaseResultCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCaseResultPayload>[]
          }
          delete: {
            args: Prisma.TestCaseResultDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCaseResultPayload>
          }
          update: {
            args: Prisma.TestCaseResultUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCaseResultPayload>
          }
          deleteMany: {
            args: Prisma.TestCaseResultDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TestCaseResultUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TestCaseResultUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCaseResultPayload>[]
          }
          upsert: {
            args: Prisma.TestCaseResultUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCaseResultPayload>
          }
          aggregate: {
            args: Prisma.TestCaseResultAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTestCaseResult>
          }
          groupBy: {
            args: Prisma.TestCaseResultGroupByArgs<ExtArgs>
            result: $Utils.Optional<TestCaseResultGroupByOutputType>[]
          }
          count: {
            args: Prisma.TestCaseResultCountArgs<ExtArgs>
            result: $Utils.Optional<TestCaseResultCountAggregateOutputType> | number
          }
        }
      }
      ProblemSolved: {
        payload: Prisma.$ProblemSolvedPayload<ExtArgs>
        fields: Prisma.ProblemSolvedFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProblemSolvedFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemSolvedPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProblemSolvedFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemSolvedPayload>
          }
          findFirst: {
            args: Prisma.ProblemSolvedFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemSolvedPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProblemSolvedFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemSolvedPayload>
          }
          findMany: {
            args: Prisma.ProblemSolvedFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemSolvedPayload>[]
          }
          create: {
            args: Prisma.ProblemSolvedCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemSolvedPayload>
          }
          createMany: {
            args: Prisma.ProblemSolvedCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProblemSolvedCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemSolvedPayload>[]
          }
          delete: {
            args: Prisma.ProblemSolvedDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemSolvedPayload>
          }
          update: {
            args: Prisma.ProblemSolvedUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemSolvedPayload>
          }
          deleteMany: {
            args: Prisma.ProblemSolvedDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProblemSolvedUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProblemSolvedUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemSolvedPayload>[]
          }
          upsert: {
            args: Prisma.ProblemSolvedUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemSolvedPayload>
          }
          aggregate: {
            args: Prisma.ProblemSolvedAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProblemSolved>
          }
          groupBy: {
            args: Prisma.ProblemSolvedGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProblemSolvedGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProblemSolvedCountArgs<ExtArgs>
            result: $Utils.Optional<ProblemSolvedCountAggregateOutputType> | number
          }
        }
      }
      Playlist: {
        payload: Prisma.$PlaylistPayload<ExtArgs>
        fields: Prisma.PlaylistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlaylistFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlaylistFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          findFirst: {
            args: Prisma.PlaylistFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlaylistFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          findMany: {
            args: Prisma.PlaylistFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>[]
          }
          create: {
            args: Prisma.PlaylistCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          createMany: {
            args: Prisma.PlaylistCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlaylistCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>[]
          }
          delete: {
            args: Prisma.PlaylistDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          update: {
            args: Prisma.PlaylistUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          deleteMany: {
            args: Prisma.PlaylistDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlaylistUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlaylistUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>[]
          }
          upsert: {
            args: Prisma.PlaylistUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          aggregate: {
            args: Prisma.PlaylistAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlaylist>
          }
          groupBy: {
            args: Prisma.PlaylistGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlaylistGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlaylistCountArgs<ExtArgs>
            result: $Utils.Optional<PlaylistCountAggregateOutputType> | number
          }
        }
      }
      ProblemInPlaylist: {
        payload: Prisma.$ProblemInPlaylistPayload<ExtArgs>
        fields: Prisma.ProblemInPlaylistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProblemInPlaylistFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemInPlaylistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProblemInPlaylistFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemInPlaylistPayload>
          }
          findFirst: {
            args: Prisma.ProblemInPlaylistFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemInPlaylistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProblemInPlaylistFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemInPlaylistPayload>
          }
          findMany: {
            args: Prisma.ProblemInPlaylistFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemInPlaylistPayload>[]
          }
          create: {
            args: Prisma.ProblemInPlaylistCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemInPlaylistPayload>
          }
          createMany: {
            args: Prisma.ProblemInPlaylistCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProblemInPlaylistCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemInPlaylistPayload>[]
          }
          delete: {
            args: Prisma.ProblemInPlaylistDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemInPlaylistPayload>
          }
          update: {
            args: Prisma.ProblemInPlaylistUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemInPlaylistPayload>
          }
          deleteMany: {
            args: Prisma.ProblemInPlaylistDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProblemInPlaylistUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProblemInPlaylistUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemInPlaylistPayload>[]
          }
          upsert: {
            args: Prisma.ProblemInPlaylistUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemInPlaylistPayload>
          }
          aggregate: {
            args: Prisma.ProblemInPlaylistAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProblemInPlaylist>
          }
          groupBy: {
            args: Prisma.ProblemInPlaylistGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProblemInPlaylistGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProblemInPlaylistCountArgs<ExtArgs>
            result: $Utils.Optional<ProblemInPlaylistCountAggregateOutputType> | number
          }
        }
      }
      Sheet: {
        payload: Prisma.$SheetPayload<ExtArgs>
        fields: Prisma.SheetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SheetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SheetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SheetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SheetPayload>
          }
          findFirst: {
            args: Prisma.SheetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SheetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SheetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SheetPayload>
          }
          findMany: {
            args: Prisma.SheetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SheetPayload>[]
          }
          create: {
            args: Prisma.SheetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SheetPayload>
          }
          createMany: {
            args: Prisma.SheetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SheetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SheetPayload>[]
          }
          delete: {
            args: Prisma.SheetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SheetPayload>
          }
          update: {
            args: Prisma.SheetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SheetPayload>
          }
          deleteMany: {
            args: Prisma.SheetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SheetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SheetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SheetPayload>[]
          }
          upsert: {
            args: Prisma.SheetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SheetPayload>
          }
          aggregate: {
            args: Prisma.SheetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSheet>
          }
          groupBy: {
            args: Prisma.SheetGroupByArgs<ExtArgs>
            result: $Utils.Optional<SheetGroupByOutputType>[]
          }
          count: {
            args: Prisma.SheetCountArgs<ExtArgs>
            result: $Utils.Optional<SheetCountAggregateOutputType> | number
          }
        }
      }
      ProblemInSheet: {
        payload: Prisma.$ProblemInSheetPayload<ExtArgs>
        fields: Prisma.ProblemInSheetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProblemInSheetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemInSheetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProblemInSheetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemInSheetPayload>
          }
          findFirst: {
            args: Prisma.ProblemInSheetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemInSheetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProblemInSheetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemInSheetPayload>
          }
          findMany: {
            args: Prisma.ProblemInSheetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemInSheetPayload>[]
          }
          create: {
            args: Prisma.ProblemInSheetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemInSheetPayload>
          }
          createMany: {
            args: Prisma.ProblemInSheetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProblemInSheetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemInSheetPayload>[]
          }
          delete: {
            args: Prisma.ProblemInSheetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemInSheetPayload>
          }
          update: {
            args: Prisma.ProblemInSheetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemInSheetPayload>
          }
          deleteMany: {
            args: Prisma.ProblemInSheetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProblemInSheetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProblemInSheetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemInSheetPayload>[]
          }
          upsert: {
            args: Prisma.ProblemInSheetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemInSheetPayload>
          }
          aggregate: {
            args: Prisma.ProblemInSheetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProblemInSheet>
          }
          groupBy: {
            args: Prisma.ProblemInSheetGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProblemInSheetGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProblemInSheetCountArgs<ExtArgs>
            result: $Utils.Optional<ProblemInSheetCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    problem?: ProblemOmit
    submission?: SubmissionOmit
    testCaseResult?: TestCaseResultOmit
    problemSolved?: ProblemSolvedOmit
    playlist?: PlaylistOmit
    problemInPlaylist?: ProblemInPlaylistOmit
    sheet?: SheetOmit
    problemInSheet?: ProblemInSheetOmit
    order?: OrderOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    prblems: number
    submissions: number
    problemSolved: number
    playlists: number
    sheet: number
    orders: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prblems?: boolean | UserCountOutputTypeCountPrblemsArgs
    submissions?: boolean | UserCountOutputTypeCountSubmissionsArgs
    problemSolved?: boolean | UserCountOutputTypeCountProblemSolvedArgs
    playlists?: boolean | UserCountOutputTypeCountPlaylistsArgs
    sheet?: boolean | UserCountOutputTypeCountSheetArgs
    orders?: boolean | UserCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPrblemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProblemWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSubmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubmissionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProblemSolvedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProblemSolvedWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPlaylistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlaylistWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSheetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SheetWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }


  /**
   * Count Type ProblemCountOutputType
   */

  export type ProblemCountOutputType = {
    submission: number
    solvedBy: number
    problemsPlaylist: number
    problemsSheet: number
  }

  export type ProblemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submission?: boolean | ProblemCountOutputTypeCountSubmissionArgs
    solvedBy?: boolean | ProblemCountOutputTypeCountSolvedByArgs
    problemsPlaylist?: boolean | ProblemCountOutputTypeCountProblemsPlaylistArgs
    problemsSheet?: boolean | ProblemCountOutputTypeCountProblemsSheetArgs
  }

  // Custom InputTypes
  /**
   * ProblemCountOutputType without action
   */
  export type ProblemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemCountOutputType
     */
    select?: ProblemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProblemCountOutputType without action
   */
  export type ProblemCountOutputTypeCountSubmissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubmissionWhereInput
  }

  /**
   * ProblemCountOutputType without action
   */
  export type ProblemCountOutputTypeCountSolvedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProblemSolvedWhereInput
  }

  /**
   * ProblemCountOutputType without action
   */
  export type ProblemCountOutputTypeCountProblemsPlaylistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProblemInPlaylistWhereInput
  }

  /**
   * ProblemCountOutputType without action
   */
  export type ProblemCountOutputTypeCountProblemsSheetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProblemInSheetWhereInput
  }


  /**
   * Count Type SubmissionCountOutputType
   */

  export type SubmissionCountOutputType = {
    testCases: number
  }

  export type SubmissionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    testCases?: boolean | SubmissionCountOutputTypeCountTestCasesArgs
  }

  // Custom InputTypes
  /**
   * SubmissionCountOutputType without action
   */
  export type SubmissionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubmissionCountOutputType
     */
    select?: SubmissionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubmissionCountOutputType without action
   */
  export type SubmissionCountOutputTypeCountTestCasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestCaseResultWhereInput
  }


  /**
   * Count Type PlaylistCountOutputType
   */

  export type PlaylistCountOutputType = {
    problems: number
  }

  export type PlaylistCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    problems?: boolean | PlaylistCountOutputTypeCountProblemsArgs
  }

  // Custom InputTypes
  /**
   * PlaylistCountOutputType without action
   */
  export type PlaylistCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistCountOutputType
     */
    select?: PlaylistCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlaylistCountOutputType without action
   */
  export type PlaylistCountOutputTypeCountProblemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProblemInPlaylistWhereInput
  }


  /**
   * Count Type SheetCountOutputType
   */

  export type SheetCountOutputType = {
    problems: number
    orders: number
  }

  export type SheetCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    problems?: boolean | SheetCountOutputTypeCountProblemsArgs
    orders?: boolean | SheetCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * SheetCountOutputType without action
   */
  export type SheetCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SheetCountOutputType
     */
    select?: SheetCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SheetCountOutputType without action
   */
  export type SheetCountOutputTypeCountProblemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProblemInSheetWhereInput
  }

  /**
   * SheetCountOutputType without action
   */
  export type SheetCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    image: string | null
    role: $Enums.UserRole | null
    password: string | null
    refreshToken: string | null
    forgotPasswordToken: string | null
    forgotPasswordExpiry: Date | null
    isEmailVerified: boolean | null
    emailVerificationToken: string | null
    emailVerificationExpiry: Date | null
    googleId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    image: string | null
    role: $Enums.UserRole | null
    password: string | null
    refreshToken: string | null
    forgotPasswordToken: string | null
    forgotPasswordExpiry: Date | null
    isEmailVerified: boolean | null
    emailVerificationToken: string | null
    emailVerificationExpiry: Date | null
    googleId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    image: number
    role: number
    password: number
    refreshToken: number
    forgotPasswordToken: number
    forgotPasswordExpiry: number
    isEmailVerified: number
    emailVerificationToken: number
    emailVerificationExpiry: number
    googleId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    image?: true
    role?: true
    password?: true
    refreshToken?: true
    forgotPasswordToken?: true
    forgotPasswordExpiry?: true
    isEmailVerified?: true
    emailVerificationToken?: true
    emailVerificationExpiry?: true
    googleId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    image?: true
    role?: true
    password?: true
    refreshToken?: true
    forgotPasswordToken?: true
    forgotPasswordExpiry?: true
    isEmailVerified?: true
    emailVerificationToken?: true
    emailVerificationExpiry?: true
    googleId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    image?: true
    role?: true
    password?: true
    refreshToken?: true
    forgotPasswordToken?: true
    forgotPasswordExpiry?: true
    isEmailVerified?: true
    emailVerificationToken?: true
    emailVerificationExpiry?: true
    googleId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string
    image: string | null
    role: $Enums.UserRole
    password: string | null
    refreshToken: string | null
    forgotPasswordToken: string | null
    forgotPasswordExpiry: Date | null
    isEmailVerified: boolean
    emailVerificationToken: string | null
    emailVerificationExpiry: Date | null
    googleId: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    image?: boolean
    role?: boolean
    password?: boolean
    refreshToken?: boolean
    forgotPasswordToken?: boolean
    forgotPasswordExpiry?: boolean
    isEmailVerified?: boolean
    emailVerificationToken?: boolean
    emailVerificationExpiry?: boolean
    googleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    prblems?: boolean | User$prblemsArgs<ExtArgs>
    submissions?: boolean | User$submissionsArgs<ExtArgs>
    problemSolved?: boolean | User$problemSolvedArgs<ExtArgs>
    playlists?: boolean | User$playlistsArgs<ExtArgs>
    sheet?: boolean | User$sheetArgs<ExtArgs>
    orders?: boolean | User$ordersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    image?: boolean
    role?: boolean
    password?: boolean
    refreshToken?: boolean
    forgotPasswordToken?: boolean
    forgotPasswordExpiry?: boolean
    isEmailVerified?: boolean
    emailVerificationToken?: boolean
    emailVerificationExpiry?: boolean
    googleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    image?: boolean
    role?: boolean
    password?: boolean
    refreshToken?: boolean
    forgotPasswordToken?: boolean
    forgotPasswordExpiry?: boolean
    isEmailVerified?: boolean
    emailVerificationToken?: boolean
    emailVerificationExpiry?: boolean
    googleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    image?: boolean
    role?: boolean
    password?: boolean
    refreshToken?: boolean
    forgotPasswordToken?: boolean
    forgotPasswordExpiry?: boolean
    isEmailVerified?: boolean
    emailVerificationToken?: boolean
    emailVerificationExpiry?: boolean
    googleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "image" | "role" | "password" | "refreshToken" | "forgotPasswordToken" | "forgotPasswordExpiry" | "isEmailVerified" | "emailVerificationToken" | "emailVerificationExpiry" | "googleId" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prblems?: boolean | User$prblemsArgs<ExtArgs>
    submissions?: boolean | User$submissionsArgs<ExtArgs>
    problemSolved?: boolean | User$problemSolvedArgs<ExtArgs>
    playlists?: boolean | User$playlistsArgs<ExtArgs>
    sheet?: boolean | User$sheetArgs<ExtArgs>
    orders?: boolean | User$ordersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      prblems: Prisma.$ProblemPayload<ExtArgs>[]
      submissions: Prisma.$SubmissionPayload<ExtArgs>[]
      problemSolved: Prisma.$ProblemSolvedPayload<ExtArgs>[]
      playlists: Prisma.$PlaylistPayload<ExtArgs>[]
      sheet: Prisma.$SheetPayload<ExtArgs>[]
      orders: Prisma.$OrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string
      image: string | null
      role: $Enums.UserRole
      password: string | null
      refreshToken: string | null
      forgotPasswordToken: string | null
      forgotPasswordExpiry: Date | null
      isEmailVerified: boolean
      emailVerificationToken: string | null
      emailVerificationExpiry: Date | null
      googleId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    prblems<T extends User$prblemsArgs<ExtArgs> = {}>(args?: Subset<T, User$prblemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    submissions<T extends User$submissionsArgs<ExtArgs> = {}>(args?: Subset<T, User$submissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    problemSolved<T extends User$problemSolvedArgs<ExtArgs> = {}>(args?: Subset<T, User$problemSolvedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemSolvedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    playlists<T extends User$playlistsArgs<ExtArgs> = {}>(args?: Subset<T, User$playlistsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sheet<T extends User$sheetArgs<ExtArgs> = {}>(args?: Subset<T, User$sheetArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SheetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orders<T extends User$ordersArgs<ExtArgs> = {}>(args?: Subset<T, User$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly image: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly password: FieldRef<"User", 'String'>
    readonly refreshToken: FieldRef<"User", 'String'>
    readonly forgotPasswordToken: FieldRef<"User", 'String'>
    readonly forgotPasswordExpiry: FieldRef<"User", 'DateTime'>
    readonly isEmailVerified: FieldRef<"User", 'Boolean'>
    readonly emailVerificationToken: FieldRef<"User", 'String'>
    readonly emailVerificationExpiry: FieldRef<"User", 'DateTime'>
    readonly googleId: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.prblems
   */
  export type User$prblemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    where?: ProblemWhereInput
    orderBy?: ProblemOrderByWithRelationInput | ProblemOrderByWithRelationInput[]
    cursor?: ProblemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProblemScalarFieldEnum | ProblemScalarFieldEnum[]
  }

  /**
   * User.submissions
   */
  export type User$submissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    where?: SubmissionWhereInput
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    cursor?: SubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * User.problemSolved
   */
  export type User$problemSolvedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemSolved
     */
    select?: ProblemSolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemSolved
     */
    omit?: ProblemSolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemSolvedInclude<ExtArgs> | null
    where?: ProblemSolvedWhereInput
    orderBy?: ProblemSolvedOrderByWithRelationInput | ProblemSolvedOrderByWithRelationInput[]
    cursor?: ProblemSolvedWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProblemSolvedScalarFieldEnum | ProblemSolvedScalarFieldEnum[]
  }

  /**
   * User.playlists
   */
  export type User$playlistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    where?: PlaylistWhereInput
    orderBy?: PlaylistOrderByWithRelationInput | PlaylistOrderByWithRelationInput[]
    cursor?: PlaylistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlaylistScalarFieldEnum | PlaylistScalarFieldEnum[]
  }

  /**
   * User.sheet
   */
  export type User$sheetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sheet
     */
    select?: SheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sheet
     */
    omit?: SheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SheetInclude<ExtArgs> | null
    where?: SheetWhereInput
    orderBy?: SheetOrderByWithRelationInput | SheetOrderByWithRelationInput[]
    cursor?: SheetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SheetScalarFieldEnum | SheetScalarFieldEnum[]
  }

  /**
   * User.orders
   */
  export type User$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Problem
   */

  export type AggregateProblem = {
    _count: ProblemCountAggregateOutputType | null
    _min: ProblemMinAggregateOutputType | null
    _max: ProblemMaxAggregateOutputType | null
  }

  export type ProblemMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    difficulty: $Enums.Difficulty | null
    userId: string | null
    constraints: string | null
    hints: string | null
    editorial: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProblemMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    difficulty: $Enums.Difficulty | null
    userId: string | null
    constraints: string | null
    hints: string | null
    editorial: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProblemCountAggregateOutputType = {
    id: number
    title: number
    description: number
    difficulty: number
    tags: number
    userId: number
    examples: number
    constraints: number
    hints: number
    editorial: number
    testcases: number
    codeSnippets: number
    referenceSolutions: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProblemMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    difficulty?: true
    userId?: true
    constraints?: true
    hints?: true
    editorial?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProblemMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    difficulty?: true
    userId?: true
    constraints?: true
    hints?: true
    editorial?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProblemCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    difficulty?: true
    tags?: true
    userId?: true
    examples?: true
    constraints?: true
    hints?: true
    editorial?: true
    testcases?: true
    codeSnippets?: true
    referenceSolutions?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProblemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Problem to aggregate.
     */
    where?: ProblemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Problems to fetch.
     */
    orderBy?: ProblemOrderByWithRelationInput | ProblemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProblemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Problems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Problems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Problems
    **/
    _count?: true | ProblemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProblemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProblemMaxAggregateInputType
  }

  export type GetProblemAggregateType<T extends ProblemAggregateArgs> = {
        [P in keyof T & keyof AggregateProblem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProblem[P]>
      : GetScalarType<T[P], AggregateProblem[P]>
  }




  export type ProblemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProblemWhereInput
    orderBy?: ProblemOrderByWithAggregationInput | ProblemOrderByWithAggregationInput[]
    by: ProblemScalarFieldEnum[] | ProblemScalarFieldEnum
    having?: ProblemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProblemCountAggregateInputType | true
    _min?: ProblemMinAggregateInputType
    _max?: ProblemMaxAggregateInputType
  }

  export type ProblemGroupByOutputType = {
    id: string
    title: string
    description: string
    difficulty: $Enums.Difficulty
    tags: string[]
    userId: string
    examples: JsonValue
    constraints: string
    hints: string | null
    editorial: string | null
    testcases: JsonValue
    codeSnippets: JsonValue
    referenceSolutions: JsonValue
    createdAt: Date
    updatedAt: Date
    _count: ProblemCountAggregateOutputType | null
    _min: ProblemMinAggregateOutputType | null
    _max: ProblemMaxAggregateOutputType | null
  }

  type GetProblemGroupByPayload<T extends ProblemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProblemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProblemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProblemGroupByOutputType[P]>
            : GetScalarType<T[P], ProblemGroupByOutputType[P]>
        }
      >
    >


  export type ProblemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    difficulty?: boolean
    tags?: boolean
    userId?: boolean
    examples?: boolean
    constraints?: boolean
    hints?: boolean
    editorial?: boolean
    testcases?: boolean
    codeSnippets?: boolean
    referenceSolutions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    submission?: boolean | Problem$submissionArgs<ExtArgs>
    solvedBy?: boolean | Problem$solvedByArgs<ExtArgs>
    problemsPlaylist?: boolean | Problem$problemsPlaylistArgs<ExtArgs>
    problemsSheet?: boolean | Problem$problemsSheetArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | ProblemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["problem"]>

  export type ProblemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    difficulty?: boolean
    tags?: boolean
    userId?: boolean
    examples?: boolean
    constraints?: boolean
    hints?: boolean
    editorial?: boolean
    testcases?: boolean
    codeSnippets?: boolean
    referenceSolutions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["problem"]>

  export type ProblemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    difficulty?: boolean
    tags?: boolean
    userId?: boolean
    examples?: boolean
    constraints?: boolean
    hints?: boolean
    editorial?: boolean
    testcases?: boolean
    codeSnippets?: boolean
    referenceSolutions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["problem"]>

  export type ProblemSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    difficulty?: boolean
    tags?: boolean
    userId?: boolean
    examples?: boolean
    constraints?: boolean
    hints?: boolean
    editorial?: boolean
    testcases?: boolean
    codeSnippets?: boolean
    referenceSolutions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProblemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "difficulty" | "tags" | "userId" | "examples" | "constraints" | "hints" | "editorial" | "testcases" | "codeSnippets" | "referenceSolutions" | "createdAt" | "updatedAt", ExtArgs["result"]["problem"]>
  export type ProblemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submission?: boolean | Problem$submissionArgs<ExtArgs>
    solvedBy?: boolean | Problem$solvedByArgs<ExtArgs>
    problemsPlaylist?: boolean | Problem$problemsPlaylistArgs<ExtArgs>
    problemsSheet?: boolean | Problem$problemsSheetArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | ProblemCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProblemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProblemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProblemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Problem"
    objects: {
      submission: Prisma.$SubmissionPayload<ExtArgs>[]
      solvedBy: Prisma.$ProblemSolvedPayload<ExtArgs>[]
      problemsPlaylist: Prisma.$ProblemInPlaylistPayload<ExtArgs>[]
      problemsSheet: Prisma.$ProblemInSheetPayload<ExtArgs>[]
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      difficulty: $Enums.Difficulty
      tags: string[]
      userId: string
      examples: Prisma.JsonValue
      constraints: string
      hints: string | null
      editorial: string | null
      testcases: Prisma.JsonValue
      codeSnippets: Prisma.JsonValue
      referenceSolutions: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["problem"]>
    composites: {}
  }

  type ProblemGetPayload<S extends boolean | null | undefined | ProblemDefaultArgs> = $Result.GetResult<Prisma.$ProblemPayload, S>

  type ProblemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProblemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProblemCountAggregateInputType | true
    }

  export interface ProblemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Problem'], meta: { name: 'Problem' } }
    /**
     * Find zero or one Problem that matches the filter.
     * @param {ProblemFindUniqueArgs} args - Arguments to find a Problem
     * @example
     * // Get one Problem
     * const problem = await prisma.problem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProblemFindUniqueArgs>(args: SelectSubset<T, ProblemFindUniqueArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Problem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProblemFindUniqueOrThrowArgs} args - Arguments to find a Problem
     * @example
     * // Get one Problem
     * const problem = await prisma.problem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProblemFindUniqueOrThrowArgs>(args: SelectSubset<T, ProblemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Problem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemFindFirstArgs} args - Arguments to find a Problem
     * @example
     * // Get one Problem
     * const problem = await prisma.problem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProblemFindFirstArgs>(args?: SelectSubset<T, ProblemFindFirstArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Problem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemFindFirstOrThrowArgs} args - Arguments to find a Problem
     * @example
     * // Get one Problem
     * const problem = await prisma.problem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProblemFindFirstOrThrowArgs>(args?: SelectSubset<T, ProblemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Problems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Problems
     * const problems = await prisma.problem.findMany()
     * 
     * // Get first 10 Problems
     * const problems = await prisma.problem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const problemWithIdOnly = await prisma.problem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProblemFindManyArgs>(args?: SelectSubset<T, ProblemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Problem.
     * @param {ProblemCreateArgs} args - Arguments to create a Problem.
     * @example
     * // Create one Problem
     * const Problem = await prisma.problem.create({
     *   data: {
     *     // ... data to create a Problem
     *   }
     * })
     * 
     */
    create<T extends ProblemCreateArgs>(args: SelectSubset<T, ProblemCreateArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Problems.
     * @param {ProblemCreateManyArgs} args - Arguments to create many Problems.
     * @example
     * // Create many Problems
     * const problem = await prisma.problem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProblemCreateManyArgs>(args?: SelectSubset<T, ProblemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Problems and returns the data saved in the database.
     * @param {ProblemCreateManyAndReturnArgs} args - Arguments to create many Problems.
     * @example
     * // Create many Problems
     * const problem = await prisma.problem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Problems and only return the `id`
     * const problemWithIdOnly = await prisma.problem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProblemCreateManyAndReturnArgs>(args?: SelectSubset<T, ProblemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Problem.
     * @param {ProblemDeleteArgs} args - Arguments to delete one Problem.
     * @example
     * // Delete one Problem
     * const Problem = await prisma.problem.delete({
     *   where: {
     *     // ... filter to delete one Problem
     *   }
     * })
     * 
     */
    delete<T extends ProblemDeleteArgs>(args: SelectSubset<T, ProblemDeleteArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Problem.
     * @param {ProblemUpdateArgs} args - Arguments to update one Problem.
     * @example
     * // Update one Problem
     * const problem = await prisma.problem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProblemUpdateArgs>(args: SelectSubset<T, ProblemUpdateArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Problems.
     * @param {ProblemDeleteManyArgs} args - Arguments to filter Problems to delete.
     * @example
     * // Delete a few Problems
     * const { count } = await prisma.problem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProblemDeleteManyArgs>(args?: SelectSubset<T, ProblemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Problems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Problems
     * const problem = await prisma.problem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProblemUpdateManyArgs>(args: SelectSubset<T, ProblemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Problems and returns the data updated in the database.
     * @param {ProblemUpdateManyAndReturnArgs} args - Arguments to update many Problems.
     * @example
     * // Update many Problems
     * const problem = await prisma.problem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Problems and only return the `id`
     * const problemWithIdOnly = await prisma.problem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProblemUpdateManyAndReturnArgs>(args: SelectSubset<T, ProblemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Problem.
     * @param {ProblemUpsertArgs} args - Arguments to update or create a Problem.
     * @example
     * // Update or create a Problem
     * const problem = await prisma.problem.upsert({
     *   create: {
     *     // ... data to create a Problem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Problem we want to update
     *   }
     * })
     */
    upsert<T extends ProblemUpsertArgs>(args: SelectSubset<T, ProblemUpsertArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Problems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemCountArgs} args - Arguments to filter Problems to count.
     * @example
     * // Count the number of Problems
     * const count = await prisma.problem.count({
     *   where: {
     *     // ... the filter for the Problems we want to count
     *   }
     * })
    **/
    count<T extends ProblemCountArgs>(
      args?: Subset<T, ProblemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProblemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Problem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProblemAggregateArgs>(args: Subset<T, ProblemAggregateArgs>): Prisma.PrismaPromise<GetProblemAggregateType<T>>

    /**
     * Group by Problem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProblemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProblemGroupByArgs['orderBy'] }
        : { orderBy?: ProblemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProblemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProblemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Problem model
   */
  readonly fields: ProblemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Problem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProblemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    submission<T extends Problem$submissionArgs<ExtArgs> = {}>(args?: Subset<T, Problem$submissionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    solvedBy<T extends Problem$solvedByArgs<ExtArgs> = {}>(args?: Subset<T, Problem$solvedByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemSolvedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    problemsPlaylist<T extends Problem$problemsPlaylistArgs<ExtArgs> = {}>(args?: Subset<T, Problem$problemsPlaylistArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemInPlaylistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    problemsSheet<T extends Problem$problemsSheetArgs<ExtArgs> = {}>(args?: Subset<T, Problem$problemsSheetArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemInSheetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Problem model
   */
  interface ProblemFieldRefs {
    readonly id: FieldRef<"Problem", 'String'>
    readonly title: FieldRef<"Problem", 'String'>
    readonly description: FieldRef<"Problem", 'String'>
    readonly difficulty: FieldRef<"Problem", 'Difficulty'>
    readonly tags: FieldRef<"Problem", 'String[]'>
    readonly userId: FieldRef<"Problem", 'String'>
    readonly examples: FieldRef<"Problem", 'Json'>
    readonly constraints: FieldRef<"Problem", 'String'>
    readonly hints: FieldRef<"Problem", 'String'>
    readonly editorial: FieldRef<"Problem", 'String'>
    readonly testcases: FieldRef<"Problem", 'Json'>
    readonly codeSnippets: FieldRef<"Problem", 'Json'>
    readonly referenceSolutions: FieldRef<"Problem", 'Json'>
    readonly createdAt: FieldRef<"Problem", 'DateTime'>
    readonly updatedAt: FieldRef<"Problem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Problem findUnique
   */
  export type ProblemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * Filter, which Problem to fetch.
     */
    where: ProblemWhereUniqueInput
  }

  /**
   * Problem findUniqueOrThrow
   */
  export type ProblemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * Filter, which Problem to fetch.
     */
    where: ProblemWhereUniqueInput
  }

  /**
   * Problem findFirst
   */
  export type ProblemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * Filter, which Problem to fetch.
     */
    where?: ProblemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Problems to fetch.
     */
    orderBy?: ProblemOrderByWithRelationInput | ProblemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Problems.
     */
    cursor?: ProblemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Problems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Problems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Problems.
     */
    distinct?: ProblemScalarFieldEnum | ProblemScalarFieldEnum[]
  }

  /**
   * Problem findFirstOrThrow
   */
  export type ProblemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * Filter, which Problem to fetch.
     */
    where?: ProblemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Problems to fetch.
     */
    orderBy?: ProblemOrderByWithRelationInput | ProblemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Problems.
     */
    cursor?: ProblemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Problems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Problems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Problems.
     */
    distinct?: ProblemScalarFieldEnum | ProblemScalarFieldEnum[]
  }

  /**
   * Problem findMany
   */
  export type ProblemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * Filter, which Problems to fetch.
     */
    where?: ProblemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Problems to fetch.
     */
    orderBy?: ProblemOrderByWithRelationInput | ProblemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Problems.
     */
    cursor?: ProblemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Problems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Problems.
     */
    skip?: number
    distinct?: ProblemScalarFieldEnum | ProblemScalarFieldEnum[]
  }

  /**
   * Problem create
   */
  export type ProblemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * The data needed to create a Problem.
     */
    data: XOR<ProblemCreateInput, ProblemUncheckedCreateInput>
  }

  /**
   * Problem createMany
   */
  export type ProblemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Problems.
     */
    data: ProblemCreateManyInput | ProblemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Problem createManyAndReturn
   */
  export type ProblemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * The data used to create many Problems.
     */
    data: ProblemCreateManyInput | ProblemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Problem update
   */
  export type ProblemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * The data needed to update a Problem.
     */
    data: XOR<ProblemUpdateInput, ProblemUncheckedUpdateInput>
    /**
     * Choose, which Problem to update.
     */
    where: ProblemWhereUniqueInput
  }

  /**
   * Problem updateMany
   */
  export type ProblemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Problems.
     */
    data: XOR<ProblemUpdateManyMutationInput, ProblemUncheckedUpdateManyInput>
    /**
     * Filter which Problems to update
     */
    where?: ProblemWhereInput
    /**
     * Limit how many Problems to update.
     */
    limit?: number
  }

  /**
   * Problem updateManyAndReturn
   */
  export type ProblemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * The data used to update Problems.
     */
    data: XOR<ProblemUpdateManyMutationInput, ProblemUncheckedUpdateManyInput>
    /**
     * Filter which Problems to update
     */
    where?: ProblemWhereInput
    /**
     * Limit how many Problems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Problem upsert
   */
  export type ProblemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * The filter to search for the Problem to update in case it exists.
     */
    where: ProblemWhereUniqueInput
    /**
     * In case the Problem found by the `where` argument doesn't exist, create a new Problem with this data.
     */
    create: XOR<ProblemCreateInput, ProblemUncheckedCreateInput>
    /**
     * In case the Problem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProblemUpdateInput, ProblemUncheckedUpdateInput>
  }

  /**
   * Problem delete
   */
  export type ProblemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * Filter which Problem to delete.
     */
    where: ProblemWhereUniqueInput
  }

  /**
   * Problem deleteMany
   */
  export type ProblemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Problems to delete
     */
    where?: ProblemWhereInput
    /**
     * Limit how many Problems to delete.
     */
    limit?: number
  }

  /**
   * Problem.submission
   */
  export type Problem$submissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    where?: SubmissionWhereInput
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    cursor?: SubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Problem.solvedBy
   */
  export type Problem$solvedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemSolved
     */
    select?: ProblemSolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemSolved
     */
    omit?: ProblemSolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemSolvedInclude<ExtArgs> | null
    where?: ProblemSolvedWhereInput
    orderBy?: ProblemSolvedOrderByWithRelationInput | ProblemSolvedOrderByWithRelationInput[]
    cursor?: ProblemSolvedWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProblemSolvedScalarFieldEnum | ProblemSolvedScalarFieldEnum[]
  }

  /**
   * Problem.problemsPlaylist
   */
  export type Problem$problemsPlaylistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemInPlaylist
     */
    select?: ProblemInPlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemInPlaylist
     */
    omit?: ProblemInPlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInPlaylistInclude<ExtArgs> | null
    where?: ProblemInPlaylistWhereInput
    orderBy?: ProblemInPlaylistOrderByWithRelationInput | ProblemInPlaylistOrderByWithRelationInput[]
    cursor?: ProblemInPlaylistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProblemInPlaylistScalarFieldEnum | ProblemInPlaylistScalarFieldEnum[]
  }

  /**
   * Problem.problemsSheet
   */
  export type Problem$problemsSheetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemInSheet
     */
    select?: ProblemInSheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemInSheet
     */
    omit?: ProblemInSheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInSheetInclude<ExtArgs> | null
    where?: ProblemInSheetWhereInput
    orderBy?: ProblemInSheetOrderByWithRelationInput | ProblemInSheetOrderByWithRelationInput[]
    cursor?: ProblemInSheetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProblemInSheetScalarFieldEnum | ProblemInSheetScalarFieldEnum[]
  }

  /**
   * Problem without action
   */
  export type ProblemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
  }


  /**
   * Model Submission
   */

  export type AggregateSubmission = {
    _count: SubmissionCountAggregateOutputType | null
    _min: SubmissionMinAggregateOutputType | null
    _max: SubmissionMaxAggregateOutputType | null
  }

  export type SubmissionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    problemId: string | null
    language: string | null
    stdin: string | null
    stdout: string | null
    stderr: string | null
    compileOutput: string | null
    status: string | null
    memory: string | null
    time: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubmissionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    problemId: string | null
    language: string | null
    stdin: string | null
    stdout: string | null
    stderr: string | null
    compileOutput: string | null
    status: string | null
    memory: string | null
    time: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubmissionCountAggregateOutputType = {
    id: number
    userId: number
    problemId: number
    sourceCode: number
    language: number
    stdin: number
    stdout: number
    stderr: number
    compileOutput: number
    status: number
    memory: number
    time: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SubmissionMinAggregateInputType = {
    id?: true
    userId?: true
    problemId?: true
    language?: true
    stdin?: true
    stdout?: true
    stderr?: true
    compileOutput?: true
    status?: true
    memory?: true
    time?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubmissionMaxAggregateInputType = {
    id?: true
    userId?: true
    problemId?: true
    language?: true
    stdin?: true
    stdout?: true
    stderr?: true
    compileOutput?: true
    status?: true
    memory?: true
    time?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubmissionCountAggregateInputType = {
    id?: true
    userId?: true
    problemId?: true
    sourceCode?: true
    language?: true
    stdin?: true
    stdout?: true
    stderr?: true
    compileOutput?: true
    status?: true
    memory?: true
    time?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SubmissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Submission to aggregate.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Submissions
    **/
    _count?: true | SubmissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubmissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubmissionMaxAggregateInputType
  }

  export type GetSubmissionAggregateType<T extends SubmissionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubmission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubmission[P]>
      : GetScalarType<T[P], AggregateSubmission[P]>
  }




  export type SubmissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubmissionWhereInput
    orderBy?: SubmissionOrderByWithAggregationInput | SubmissionOrderByWithAggregationInput[]
    by: SubmissionScalarFieldEnum[] | SubmissionScalarFieldEnum
    having?: SubmissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubmissionCountAggregateInputType | true
    _min?: SubmissionMinAggregateInputType
    _max?: SubmissionMaxAggregateInputType
  }

  export type SubmissionGroupByOutputType = {
    id: string
    userId: string
    problemId: string
    sourceCode: JsonValue
    language: string
    stdin: string | null
    stdout: string | null
    stderr: string | null
    compileOutput: string | null
    status: string
    memory: string | null
    time: string | null
    createdAt: Date
    updatedAt: Date
    _count: SubmissionCountAggregateOutputType | null
    _min: SubmissionMinAggregateOutputType | null
    _max: SubmissionMaxAggregateOutputType | null
  }

  type GetSubmissionGroupByPayload<T extends SubmissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubmissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubmissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubmissionGroupByOutputType[P]>
            : GetScalarType<T[P], SubmissionGroupByOutputType[P]>
        }
      >
    >


  export type SubmissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    problemId?: boolean
    sourceCode?: boolean
    language?: boolean
    stdin?: boolean
    stdout?: boolean
    stderr?: boolean
    compileOutput?: boolean
    status?: boolean
    memory?: boolean
    time?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
    testCases?: boolean | Submission$testCasesArgs<ExtArgs>
    _count?: boolean | SubmissionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["submission"]>

  export type SubmissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    problemId?: boolean
    sourceCode?: boolean
    language?: boolean
    stdin?: boolean
    stdout?: boolean
    stderr?: boolean
    compileOutput?: boolean
    status?: boolean
    memory?: boolean
    time?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["submission"]>

  export type SubmissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    problemId?: boolean
    sourceCode?: boolean
    language?: boolean
    stdin?: boolean
    stdout?: boolean
    stderr?: boolean
    compileOutput?: boolean
    status?: boolean
    memory?: boolean
    time?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["submission"]>

  export type SubmissionSelectScalar = {
    id?: boolean
    userId?: boolean
    problemId?: boolean
    sourceCode?: boolean
    language?: boolean
    stdin?: boolean
    stdout?: boolean
    stderr?: boolean
    compileOutput?: boolean
    status?: boolean
    memory?: boolean
    time?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SubmissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "problemId" | "sourceCode" | "language" | "stdin" | "stdout" | "stderr" | "compileOutput" | "status" | "memory" | "time" | "createdAt" | "updatedAt", ExtArgs["result"]["submission"]>
  export type SubmissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
    testCases?: boolean | Submission$testCasesArgs<ExtArgs>
    _count?: boolean | SubmissionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SubmissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }
  export type SubmissionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }

  export type $SubmissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Submission"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      problem: Prisma.$ProblemPayload<ExtArgs>
      testCases: Prisma.$TestCaseResultPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      problemId: string
      sourceCode: Prisma.JsonValue
      language: string
      stdin: string | null
      stdout: string | null
      stderr: string | null
      compileOutput: string | null
      status: string
      memory: string | null
      time: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["submission"]>
    composites: {}
  }

  type SubmissionGetPayload<S extends boolean | null | undefined | SubmissionDefaultArgs> = $Result.GetResult<Prisma.$SubmissionPayload, S>

  type SubmissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubmissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubmissionCountAggregateInputType | true
    }

  export interface SubmissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Submission'], meta: { name: 'Submission' } }
    /**
     * Find zero or one Submission that matches the filter.
     * @param {SubmissionFindUniqueArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubmissionFindUniqueArgs>(args: SelectSubset<T, SubmissionFindUniqueArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Submission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubmissionFindUniqueOrThrowArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubmissionFindUniqueOrThrowArgs>(args: SelectSubset<T, SubmissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Submission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionFindFirstArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubmissionFindFirstArgs>(args?: SelectSubset<T, SubmissionFindFirstArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Submission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionFindFirstOrThrowArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubmissionFindFirstOrThrowArgs>(args?: SelectSubset<T, SubmissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Submissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Submissions
     * const submissions = await prisma.submission.findMany()
     * 
     * // Get first 10 Submissions
     * const submissions = await prisma.submission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const submissionWithIdOnly = await prisma.submission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubmissionFindManyArgs>(args?: SelectSubset<T, SubmissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Submission.
     * @param {SubmissionCreateArgs} args - Arguments to create a Submission.
     * @example
     * // Create one Submission
     * const Submission = await prisma.submission.create({
     *   data: {
     *     // ... data to create a Submission
     *   }
     * })
     * 
     */
    create<T extends SubmissionCreateArgs>(args: SelectSubset<T, SubmissionCreateArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Submissions.
     * @param {SubmissionCreateManyArgs} args - Arguments to create many Submissions.
     * @example
     * // Create many Submissions
     * const submission = await prisma.submission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubmissionCreateManyArgs>(args?: SelectSubset<T, SubmissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Submissions and returns the data saved in the database.
     * @param {SubmissionCreateManyAndReturnArgs} args - Arguments to create many Submissions.
     * @example
     * // Create many Submissions
     * const submission = await prisma.submission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Submissions and only return the `id`
     * const submissionWithIdOnly = await prisma.submission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubmissionCreateManyAndReturnArgs>(args?: SelectSubset<T, SubmissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Submission.
     * @param {SubmissionDeleteArgs} args - Arguments to delete one Submission.
     * @example
     * // Delete one Submission
     * const Submission = await prisma.submission.delete({
     *   where: {
     *     // ... filter to delete one Submission
     *   }
     * })
     * 
     */
    delete<T extends SubmissionDeleteArgs>(args: SelectSubset<T, SubmissionDeleteArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Submission.
     * @param {SubmissionUpdateArgs} args - Arguments to update one Submission.
     * @example
     * // Update one Submission
     * const submission = await prisma.submission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubmissionUpdateArgs>(args: SelectSubset<T, SubmissionUpdateArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Submissions.
     * @param {SubmissionDeleteManyArgs} args - Arguments to filter Submissions to delete.
     * @example
     * // Delete a few Submissions
     * const { count } = await prisma.submission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubmissionDeleteManyArgs>(args?: SelectSubset<T, SubmissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Submissions
     * const submission = await prisma.submission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubmissionUpdateManyArgs>(args: SelectSubset<T, SubmissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Submissions and returns the data updated in the database.
     * @param {SubmissionUpdateManyAndReturnArgs} args - Arguments to update many Submissions.
     * @example
     * // Update many Submissions
     * const submission = await prisma.submission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Submissions and only return the `id`
     * const submissionWithIdOnly = await prisma.submission.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SubmissionUpdateManyAndReturnArgs>(args: SelectSubset<T, SubmissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Submission.
     * @param {SubmissionUpsertArgs} args - Arguments to update or create a Submission.
     * @example
     * // Update or create a Submission
     * const submission = await prisma.submission.upsert({
     *   create: {
     *     // ... data to create a Submission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Submission we want to update
     *   }
     * })
     */
    upsert<T extends SubmissionUpsertArgs>(args: SelectSubset<T, SubmissionUpsertArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionCountArgs} args - Arguments to filter Submissions to count.
     * @example
     * // Count the number of Submissions
     * const count = await prisma.submission.count({
     *   where: {
     *     // ... the filter for the Submissions we want to count
     *   }
     * })
    **/
    count<T extends SubmissionCountArgs>(
      args?: Subset<T, SubmissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubmissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Submission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubmissionAggregateArgs>(args: Subset<T, SubmissionAggregateArgs>): Prisma.PrismaPromise<GetSubmissionAggregateType<T>>

    /**
     * Group by Submission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubmissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubmissionGroupByArgs['orderBy'] }
        : { orderBy?: SubmissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubmissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubmissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Submission model
   */
  readonly fields: SubmissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Submission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubmissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    problem<T extends ProblemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProblemDefaultArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    testCases<T extends Submission$testCasesArgs<ExtArgs> = {}>(args?: Subset<T, Submission$testCasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestCaseResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Submission model
   */
  interface SubmissionFieldRefs {
    readonly id: FieldRef<"Submission", 'String'>
    readonly userId: FieldRef<"Submission", 'String'>
    readonly problemId: FieldRef<"Submission", 'String'>
    readonly sourceCode: FieldRef<"Submission", 'Json'>
    readonly language: FieldRef<"Submission", 'String'>
    readonly stdin: FieldRef<"Submission", 'String'>
    readonly stdout: FieldRef<"Submission", 'String'>
    readonly stderr: FieldRef<"Submission", 'String'>
    readonly compileOutput: FieldRef<"Submission", 'String'>
    readonly status: FieldRef<"Submission", 'String'>
    readonly memory: FieldRef<"Submission", 'String'>
    readonly time: FieldRef<"Submission", 'String'>
    readonly createdAt: FieldRef<"Submission", 'DateTime'>
    readonly updatedAt: FieldRef<"Submission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Submission findUnique
   */
  export type SubmissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission findUniqueOrThrow
   */
  export type SubmissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission findFirst
   */
  export type SubmissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Submissions.
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Submissions.
     */
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Submission findFirstOrThrow
   */
  export type SubmissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Submissions.
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Submissions.
     */
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Submission findMany
   */
  export type SubmissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submissions to fetch.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Submissions.
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Submission create
   */
  export type SubmissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * The data needed to create a Submission.
     */
    data: XOR<SubmissionCreateInput, SubmissionUncheckedCreateInput>
  }

  /**
   * Submission createMany
   */
  export type SubmissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Submissions.
     */
    data: SubmissionCreateManyInput | SubmissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Submission createManyAndReturn
   */
  export type SubmissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * The data used to create many Submissions.
     */
    data: SubmissionCreateManyInput | SubmissionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Submission update
   */
  export type SubmissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * The data needed to update a Submission.
     */
    data: XOR<SubmissionUpdateInput, SubmissionUncheckedUpdateInput>
    /**
     * Choose, which Submission to update.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission updateMany
   */
  export type SubmissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Submissions.
     */
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyInput>
    /**
     * Filter which Submissions to update
     */
    where?: SubmissionWhereInput
    /**
     * Limit how many Submissions to update.
     */
    limit?: number
  }

  /**
   * Submission updateManyAndReturn
   */
  export type SubmissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * The data used to update Submissions.
     */
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyInput>
    /**
     * Filter which Submissions to update
     */
    where?: SubmissionWhereInput
    /**
     * Limit how many Submissions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Submission upsert
   */
  export type SubmissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * The filter to search for the Submission to update in case it exists.
     */
    where: SubmissionWhereUniqueInput
    /**
     * In case the Submission found by the `where` argument doesn't exist, create a new Submission with this data.
     */
    create: XOR<SubmissionCreateInput, SubmissionUncheckedCreateInput>
    /**
     * In case the Submission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubmissionUpdateInput, SubmissionUncheckedUpdateInput>
  }

  /**
   * Submission delete
   */
  export type SubmissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter which Submission to delete.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission deleteMany
   */
  export type SubmissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Submissions to delete
     */
    where?: SubmissionWhereInput
    /**
     * Limit how many Submissions to delete.
     */
    limit?: number
  }

  /**
   * Submission.testCases
   */
  export type Submission$testCasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCaseResult
     */
    select?: TestCaseResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestCaseResult
     */
    omit?: TestCaseResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseResultInclude<ExtArgs> | null
    where?: TestCaseResultWhereInput
    orderBy?: TestCaseResultOrderByWithRelationInput | TestCaseResultOrderByWithRelationInput[]
    cursor?: TestCaseResultWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TestCaseResultScalarFieldEnum | TestCaseResultScalarFieldEnum[]
  }

  /**
   * Submission without action
   */
  export type SubmissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
  }


  /**
   * Model TestCaseResult
   */

  export type AggregateTestCaseResult = {
    _count: TestCaseResultCountAggregateOutputType | null
    _avg: TestCaseResultAvgAggregateOutputType | null
    _sum: TestCaseResultSumAggregateOutputType | null
    _min: TestCaseResultMinAggregateOutputType | null
    _max: TestCaseResultMaxAggregateOutputType | null
  }

  export type TestCaseResultAvgAggregateOutputType = {
    testCase: number | null
  }

  export type TestCaseResultSumAggregateOutputType = {
    testCase: number | null
  }

  export type TestCaseResultMinAggregateOutputType = {
    id: string | null
    submissionId: string | null
    testCase: number | null
    passed: boolean | null
    stdout: string | null
    expected: string | null
    stderr: string | null
    compileOutput: string | null
    status: string | null
    memory: string | null
    time: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TestCaseResultMaxAggregateOutputType = {
    id: string | null
    submissionId: string | null
    testCase: number | null
    passed: boolean | null
    stdout: string | null
    expected: string | null
    stderr: string | null
    compileOutput: string | null
    status: string | null
    memory: string | null
    time: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TestCaseResultCountAggregateOutputType = {
    id: number
    submissionId: number
    testCase: number
    passed: number
    stdout: number
    expected: number
    stderr: number
    compileOutput: number
    status: number
    memory: number
    time: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TestCaseResultAvgAggregateInputType = {
    testCase?: true
  }

  export type TestCaseResultSumAggregateInputType = {
    testCase?: true
  }

  export type TestCaseResultMinAggregateInputType = {
    id?: true
    submissionId?: true
    testCase?: true
    passed?: true
    stdout?: true
    expected?: true
    stderr?: true
    compileOutput?: true
    status?: true
    memory?: true
    time?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TestCaseResultMaxAggregateInputType = {
    id?: true
    submissionId?: true
    testCase?: true
    passed?: true
    stdout?: true
    expected?: true
    stderr?: true
    compileOutput?: true
    status?: true
    memory?: true
    time?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TestCaseResultCountAggregateInputType = {
    id?: true
    submissionId?: true
    testCase?: true
    passed?: true
    stdout?: true
    expected?: true
    stderr?: true
    compileOutput?: true
    status?: true
    memory?: true
    time?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TestCaseResultAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TestCaseResult to aggregate.
     */
    where?: TestCaseResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestCaseResults to fetch.
     */
    orderBy?: TestCaseResultOrderByWithRelationInput | TestCaseResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TestCaseResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestCaseResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestCaseResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TestCaseResults
    **/
    _count?: true | TestCaseResultCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TestCaseResultAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TestCaseResultSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TestCaseResultMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TestCaseResultMaxAggregateInputType
  }

  export type GetTestCaseResultAggregateType<T extends TestCaseResultAggregateArgs> = {
        [P in keyof T & keyof AggregateTestCaseResult]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTestCaseResult[P]>
      : GetScalarType<T[P], AggregateTestCaseResult[P]>
  }




  export type TestCaseResultGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestCaseResultWhereInput
    orderBy?: TestCaseResultOrderByWithAggregationInput | TestCaseResultOrderByWithAggregationInput[]
    by: TestCaseResultScalarFieldEnum[] | TestCaseResultScalarFieldEnum
    having?: TestCaseResultScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TestCaseResultCountAggregateInputType | true
    _avg?: TestCaseResultAvgAggregateInputType
    _sum?: TestCaseResultSumAggregateInputType
    _min?: TestCaseResultMinAggregateInputType
    _max?: TestCaseResultMaxAggregateInputType
  }

  export type TestCaseResultGroupByOutputType = {
    id: string
    submissionId: string
    testCase: number
    passed: boolean
    stdout: string | null
    expected: string
    stderr: string | null
    compileOutput: string | null
    status: string
    memory: string | null
    time: string | null
    createdAt: Date
    updatedAt: Date
    _count: TestCaseResultCountAggregateOutputType | null
    _avg: TestCaseResultAvgAggregateOutputType | null
    _sum: TestCaseResultSumAggregateOutputType | null
    _min: TestCaseResultMinAggregateOutputType | null
    _max: TestCaseResultMaxAggregateOutputType | null
  }

  type GetTestCaseResultGroupByPayload<T extends TestCaseResultGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TestCaseResultGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TestCaseResultGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestCaseResultGroupByOutputType[P]>
            : GetScalarType<T[P], TestCaseResultGroupByOutputType[P]>
        }
      >
    >


  export type TestCaseResultSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    submissionId?: boolean
    testCase?: boolean
    passed?: boolean
    stdout?: boolean
    expected?: boolean
    stderr?: boolean
    compileOutput?: boolean
    status?: boolean
    memory?: boolean
    time?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    submission?: boolean | SubmissionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testCaseResult"]>

  export type TestCaseResultSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    submissionId?: boolean
    testCase?: boolean
    passed?: boolean
    stdout?: boolean
    expected?: boolean
    stderr?: boolean
    compileOutput?: boolean
    status?: boolean
    memory?: boolean
    time?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    submission?: boolean | SubmissionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testCaseResult"]>

  export type TestCaseResultSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    submissionId?: boolean
    testCase?: boolean
    passed?: boolean
    stdout?: boolean
    expected?: boolean
    stderr?: boolean
    compileOutput?: boolean
    status?: boolean
    memory?: boolean
    time?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    submission?: boolean | SubmissionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testCaseResult"]>

  export type TestCaseResultSelectScalar = {
    id?: boolean
    submissionId?: boolean
    testCase?: boolean
    passed?: boolean
    stdout?: boolean
    expected?: boolean
    stderr?: boolean
    compileOutput?: boolean
    status?: boolean
    memory?: boolean
    time?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TestCaseResultOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "submissionId" | "testCase" | "passed" | "stdout" | "expected" | "stderr" | "compileOutput" | "status" | "memory" | "time" | "createdAt" | "updatedAt", ExtArgs["result"]["testCaseResult"]>
  export type TestCaseResultInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submission?: boolean | SubmissionDefaultArgs<ExtArgs>
  }
  export type TestCaseResultIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submission?: boolean | SubmissionDefaultArgs<ExtArgs>
  }
  export type TestCaseResultIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submission?: boolean | SubmissionDefaultArgs<ExtArgs>
  }

  export type $TestCaseResultPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TestCaseResult"
    objects: {
      submission: Prisma.$SubmissionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      submissionId: string
      testCase: number
      passed: boolean
      stdout: string | null
      expected: string
      stderr: string | null
      compileOutput: string | null
      status: string
      memory: string | null
      time: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["testCaseResult"]>
    composites: {}
  }

  type TestCaseResultGetPayload<S extends boolean | null | undefined | TestCaseResultDefaultArgs> = $Result.GetResult<Prisma.$TestCaseResultPayload, S>

  type TestCaseResultCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TestCaseResultFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TestCaseResultCountAggregateInputType | true
    }

  export interface TestCaseResultDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TestCaseResult'], meta: { name: 'TestCaseResult' } }
    /**
     * Find zero or one TestCaseResult that matches the filter.
     * @param {TestCaseResultFindUniqueArgs} args - Arguments to find a TestCaseResult
     * @example
     * // Get one TestCaseResult
     * const testCaseResult = await prisma.testCaseResult.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TestCaseResultFindUniqueArgs>(args: SelectSubset<T, TestCaseResultFindUniqueArgs<ExtArgs>>): Prisma__TestCaseResultClient<$Result.GetResult<Prisma.$TestCaseResultPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TestCaseResult that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TestCaseResultFindUniqueOrThrowArgs} args - Arguments to find a TestCaseResult
     * @example
     * // Get one TestCaseResult
     * const testCaseResult = await prisma.testCaseResult.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TestCaseResultFindUniqueOrThrowArgs>(args: SelectSubset<T, TestCaseResultFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TestCaseResultClient<$Result.GetResult<Prisma.$TestCaseResultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TestCaseResult that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCaseResultFindFirstArgs} args - Arguments to find a TestCaseResult
     * @example
     * // Get one TestCaseResult
     * const testCaseResult = await prisma.testCaseResult.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TestCaseResultFindFirstArgs>(args?: SelectSubset<T, TestCaseResultFindFirstArgs<ExtArgs>>): Prisma__TestCaseResultClient<$Result.GetResult<Prisma.$TestCaseResultPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TestCaseResult that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCaseResultFindFirstOrThrowArgs} args - Arguments to find a TestCaseResult
     * @example
     * // Get one TestCaseResult
     * const testCaseResult = await prisma.testCaseResult.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TestCaseResultFindFirstOrThrowArgs>(args?: SelectSubset<T, TestCaseResultFindFirstOrThrowArgs<ExtArgs>>): Prisma__TestCaseResultClient<$Result.GetResult<Prisma.$TestCaseResultPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TestCaseResults that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCaseResultFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TestCaseResults
     * const testCaseResults = await prisma.testCaseResult.findMany()
     * 
     * // Get first 10 TestCaseResults
     * const testCaseResults = await prisma.testCaseResult.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const testCaseResultWithIdOnly = await prisma.testCaseResult.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TestCaseResultFindManyArgs>(args?: SelectSubset<T, TestCaseResultFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestCaseResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TestCaseResult.
     * @param {TestCaseResultCreateArgs} args - Arguments to create a TestCaseResult.
     * @example
     * // Create one TestCaseResult
     * const TestCaseResult = await prisma.testCaseResult.create({
     *   data: {
     *     // ... data to create a TestCaseResult
     *   }
     * })
     * 
     */
    create<T extends TestCaseResultCreateArgs>(args: SelectSubset<T, TestCaseResultCreateArgs<ExtArgs>>): Prisma__TestCaseResultClient<$Result.GetResult<Prisma.$TestCaseResultPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TestCaseResults.
     * @param {TestCaseResultCreateManyArgs} args - Arguments to create many TestCaseResults.
     * @example
     * // Create many TestCaseResults
     * const testCaseResult = await prisma.testCaseResult.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TestCaseResultCreateManyArgs>(args?: SelectSubset<T, TestCaseResultCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TestCaseResults and returns the data saved in the database.
     * @param {TestCaseResultCreateManyAndReturnArgs} args - Arguments to create many TestCaseResults.
     * @example
     * // Create many TestCaseResults
     * const testCaseResult = await prisma.testCaseResult.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TestCaseResults and only return the `id`
     * const testCaseResultWithIdOnly = await prisma.testCaseResult.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TestCaseResultCreateManyAndReturnArgs>(args?: SelectSubset<T, TestCaseResultCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestCaseResultPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TestCaseResult.
     * @param {TestCaseResultDeleteArgs} args - Arguments to delete one TestCaseResult.
     * @example
     * // Delete one TestCaseResult
     * const TestCaseResult = await prisma.testCaseResult.delete({
     *   where: {
     *     // ... filter to delete one TestCaseResult
     *   }
     * })
     * 
     */
    delete<T extends TestCaseResultDeleteArgs>(args: SelectSubset<T, TestCaseResultDeleteArgs<ExtArgs>>): Prisma__TestCaseResultClient<$Result.GetResult<Prisma.$TestCaseResultPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TestCaseResult.
     * @param {TestCaseResultUpdateArgs} args - Arguments to update one TestCaseResult.
     * @example
     * // Update one TestCaseResult
     * const testCaseResult = await prisma.testCaseResult.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TestCaseResultUpdateArgs>(args: SelectSubset<T, TestCaseResultUpdateArgs<ExtArgs>>): Prisma__TestCaseResultClient<$Result.GetResult<Prisma.$TestCaseResultPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TestCaseResults.
     * @param {TestCaseResultDeleteManyArgs} args - Arguments to filter TestCaseResults to delete.
     * @example
     * // Delete a few TestCaseResults
     * const { count } = await prisma.testCaseResult.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TestCaseResultDeleteManyArgs>(args?: SelectSubset<T, TestCaseResultDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TestCaseResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCaseResultUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TestCaseResults
     * const testCaseResult = await prisma.testCaseResult.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TestCaseResultUpdateManyArgs>(args: SelectSubset<T, TestCaseResultUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TestCaseResults and returns the data updated in the database.
     * @param {TestCaseResultUpdateManyAndReturnArgs} args - Arguments to update many TestCaseResults.
     * @example
     * // Update many TestCaseResults
     * const testCaseResult = await prisma.testCaseResult.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TestCaseResults and only return the `id`
     * const testCaseResultWithIdOnly = await prisma.testCaseResult.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TestCaseResultUpdateManyAndReturnArgs>(args: SelectSubset<T, TestCaseResultUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestCaseResultPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TestCaseResult.
     * @param {TestCaseResultUpsertArgs} args - Arguments to update or create a TestCaseResult.
     * @example
     * // Update or create a TestCaseResult
     * const testCaseResult = await prisma.testCaseResult.upsert({
     *   create: {
     *     // ... data to create a TestCaseResult
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TestCaseResult we want to update
     *   }
     * })
     */
    upsert<T extends TestCaseResultUpsertArgs>(args: SelectSubset<T, TestCaseResultUpsertArgs<ExtArgs>>): Prisma__TestCaseResultClient<$Result.GetResult<Prisma.$TestCaseResultPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TestCaseResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCaseResultCountArgs} args - Arguments to filter TestCaseResults to count.
     * @example
     * // Count the number of TestCaseResults
     * const count = await prisma.testCaseResult.count({
     *   where: {
     *     // ... the filter for the TestCaseResults we want to count
     *   }
     * })
    **/
    count<T extends TestCaseResultCountArgs>(
      args?: Subset<T, TestCaseResultCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestCaseResultCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TestCaseResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCaseResultAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TestCaseResultAggregateArgs>(args: Subset<T, TestCaseResultAggregateArgs>): Prisma.PrismaPromise<GetTestCaseResultAggregateType<T>>

    /**
     * Group by TestCaseResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCaseResultGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TestCaseResultGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TestCaseResultGroupByArgs['orderBy'] }
        : { orderBy?: TestCaseResultGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TestCaseResultGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestCaseResultGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TestCaseResult model
   */
  readonly fields: TestCaseResultFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TestCaseResult.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TestCaseResultClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    submission<T extends SubmissionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubmissionDefaultArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TestCaseResult model
   */
  interface TestCaseResultFieldRefs {
    readonly id: FieldRef<"TestCaseResult", 'String'>
    readonly submissionId: FieldRef<"TestCaseResult", 'String'>
    readonly testCase: FieldRef<"TestCaseResult", 'Int'>
    readonly passed: FieldRef<"TestCaseResult", 'Boolean'>
    readonly stdout: FieldRef<"TestCaseResult", 'String'>
    readonly expected: FieldRef<"TestCaseResult", 'String'>
    readonly stderr: FieldRef<"TestCaseResult", 'String'>
    readonly compileOutput: FieldRef<"TestCaseResult", 'String'>
    readonly status: FieldRef<"TestCaseResult", 'String'>
    readonly memory: FieldRef<"TestCaseResult", 'String'>
    readonly time: FieldRef<"TestCaseResult", 'String'>
    readonly createdAt: FieldRef<"TestCaseResult", 'DateTime'>
    readonly updatedAt: FieldRef<"TestCaseResult", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TestCaseResult findUnique
   */
  export type TestCaseResultFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCaseResult
     */
    select?: TestCaseResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestCaseResult
     */
    omit?: TestCaseResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseResultInclude<ExtArgs> | null
    /**
     * Filter, which TestCaseResult to fetch.
     */
    where: TestCaseResultWhereUniqueInput
  }

  /**
   * TestCaseResult findUniqueOrThrow
   */
  export type TestCaseResultFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCaseResult
     */
    select?: TestCaseResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestCaseResult
     */
    omit?: TestCaseResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseResultInclude<ExtArgs> | null
    /**
     * Filter, which TestCaseResult to fetch.
     */
    where: TestCaseResultWhereUniqueInput
  }

  /**
   * TestCaseResult findFirst
   */
  export type TestCaseResultFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCaseResult
     */
    select?: TestCaseResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestCaseResult
     */
    omit?: TestCaseResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseResultInclude<ExtArgs> | null
    /**
     * Filter, which TestCaseResult to fetch.
     */
    where?: TestCaseResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestCaseResults to fetch.
     */
    orderBy?: TestCaseResultOrderByWithRelationInput | TestCaseResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TestCaseResults.
     */
    cursor?: TestCaseResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestCaseResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestCaseResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TestCaseResults.
     */
    distinct?: TestCaseResultScalarFieldEnum | TestCaseResultScalarFieldEnum[]
  }

  /**
   * TestCaseResult findFirstOrThrow
   */
  export type TestCaseResultFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCaseResult
     */
    select?: TestCaseResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestCaseResult
     */
    omit?: TestCaseResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseResultInclude<ExtArgs> | null
    /**
     * Filter, which TestCaseResult to fetch.
     */
    where?: TestCaseResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestCaseResults to fetch.
     */
    orderBy?: TestCaseResultOrderByWithRelationInput | TestCaseResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TestCaseResults.
     */
    cursor?: TestCaseResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestCaseResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestCaseResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TestCaseResults.
     */
    distinct?: TestCaseResultScalarFieldEnum | TestCaseResultScalarFieldEnum[]
  }

  /**
   * TestCaseResult findMany
   */
  export type TestCaseResultFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCaseResult
     */
    select?: TestCaseResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestCaseResult
     */
    omit?: TestCaseResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseResultInclude<ExtArgs> | null
    /**
     * Filter, which TestCaseResults to fetch.
     */
    where?: TestCaseResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestCaseResults to fetch.
     */
    orderBy?: TestCaseResultOrderByWithRelationInput | TestCaseResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TestCaseResults.
     */
    cursor?: TestCaseResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestCaseResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestCaseResults.
     */
    skip?: number
    distinct?: TestCaseResultScalarFieldEnum | TestCaseResultScalarFieldEnum[]
  }

  /**
   * TestCaseResult create
   */
  export type TestCaseResultCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCaseResult
     */
    select?: TestCaseResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestCaseResult
     */
    omit?: TestCaseResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseResultInclude<ExtArgs> | null
    /**
     * The data needed to create a TestCaseResult.
     */
    data: XOR<TestCaseResultCreateInput, TestCaseResultUncheckedCreateInput>
  }

  /**
   * TestCaseResult createMany
   */
  export type TestCaseResultCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TestCaseResults.
     */
    data: TestCaseResultCreateManyInput | TestCaseResultCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TestCaseResult createManyAndReturn
   */
  export type TestCaseResultCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCaseResult
     */
    select?: TestCaseResultSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TestCaseResult
     */
    omit?: TestCaseResultOmit<ExtArgs> | null
    /**
     * The data used to create many TestCaseResults.
     */
    data: TestCaseResultCreateManyInput | TestCaseResultCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseResultIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TestCaseResult update
   */
  export type TestCaseResultUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCaseResult
     */
    select?: TestCaseResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestCaseResult
     */
    omit?: TestCaseResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseResultInclude<ExtArgs> | null
    /**
     * The data needed to update a TestCaseResult.
     */
    data: XOR<TestCaseResultUpdateInput, TestCaseResultUncheckedUpdateInput>
    /**
     * Choose, which TestCaseResult to update.
     */
    where: TestCaseResultWhereUniqueInput
  }

  /**
   * TestCaseResult updateMany
   */
  export type TestCaseResultUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TestCaseResults.
     */
    data: XOR<TestCaseResultUpdateManyMutationInput, TestCaseResultUncheckedUpdateManyInput>
    /**
     * Filter which TestCaseResults to update
     */
    where?: TestCaseResultWhereInput
    /**
     * Limit how many TestCaseResults to update.
     */
    limit?: number
  }

  /**
   * TestCaseResult updateManyAndReturn
   */
  export type TestCaseResultUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCaseResult
     */
    select?: TestCaseResultSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TestCaseResult
     */
    omit?: TestCaseResultOmit<ExtArgs> | null
    /**
     * The data used to update TestCaseResults.
     */
    data: XOR<TestCaseResultUpdateManyMutationInput, TestCaseResultUncheckedUpdateManyInput>
    /**
     * Filter which TestCaseResults to update
     */
    where?: TestCaseResultWhereInput
    /**
     * Limit how many TestCaseResults to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseResultIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TestCaseResult upsert
   */
  export type TestCaseResultUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCaseResult
     */
    select?: TestCaseResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestCaseResult
     */
    omit?: TestCaseResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseResultInclude<ExtArgs> | null
    /**
     * The filter to search for the TestCaseResult to update in case it exists.
     */
    where: TestCaseResultWhereUniqueInput
    /**
     * In case the TestCaseResult found by the `where` argument doesn't exist, create a new TestCaseResult with this data.
     */
    create: XOR<TestCaseResultCreateInput, TestCaseResultUncheckedCreateInput>
    /**
     * In case the TestCaseResult was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TestCaseResultUpdateInput, TestCaseResultUncheckedUpdateInput>
  }

  /**
   * TestCaseResult delete
   */
  export type TestCaseResultDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCaseResult
     */
    select?: TestCaseResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestCaseResult
     */
    omit?: TestCaseResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseResultInclude<ExtArgs> | null
    /**
     * Filter which TestCaseResult to delete.
     */
    where: TestCaseResultWhereUniqueInput
  }

  /**
   * TestCaseResult deleteMany
   */
  export type TestCaseResultDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TestCaseResults to delete
     */
    where?: TestCaseResultWhereInput
    /**
     * Limit how many TestCaseResults to delete.
     */
    limit?: number
  }

  /**
   * TestCaseResult without action
   */
  export type TestCaseResultDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCaseResult
     */
    select?: TestCaseResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestCaseResult
     */
    omit?: TestCaseResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseResultInclude<ExtArgs> | null
  }


  /**
   * Model ProblemSolved
   */

  export type AggregateProblemSolved = {
    _count: ProblemSolvedCountAggregateOutputType | null
    _min: ProblemSolvedMinAggregateOutputType | null
    _max: ProblemSolvedMaxAggregateOutputType | null
  }

  export type ProblemSolvedMinAggregateOutputType = {
    id: string | null
    userId: string | null
    problemId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProblemSolvedMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    problemId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProblemSolvedCountAggregateOutputType = {
    id: number
    userId: number
    problemId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProblemSolvedMinAggregateInputType = {
    id?: true
    userId?: true
    problemId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProblemSolvedMaxAggregateInputType = {
    id?: true
    userId?: true
    problemId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProblemSolvedCountAggregateInputType = {
    id?: true
    userId?: true
    problemId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProblemSolvedAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProblemSolved to aggregate.
     */
    where?: ProblemSolvedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProblemSolveds to fetch.
     */
    orderBy?: ProblemSolvedOrderByWithRelationInput | ProblemSolvedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProblemSolvedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProblemSolveds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProblemSolveds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProblemSolveds
    **/
    _count?: true | ProblemSolvedCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProblemSolvedMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProblemSolvedMaxAggregateInputType
  }

  export type GetProblemSolvedAggregateType<T extends ProblemSolvedAggregateArgs> = {
        [P in keyof T & keyof AggregateProblemSolved]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProblemSolved[P]>
      : GetScalarType<T[P], AggregateProblemSolved[P]>
  }




  export type ProblemSolvedGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProblemSolvedWhereInput
    orderBy?: ProblemSolvedOrderByWithAggregationInput | ProblemSolvedOrderByWithAggregationInput[]
    by: ProblemSolvedScalarFieldEnum[] | ProblemSolvedScalarFieldEnum
    having?: ProblemSolvedScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProblemSolvedCountAggregateInputType | true
    _min?: ProblemSolvedMinAggregateInputType
    _max?: ProblemSolvedMaxAggregateInputType
  }

  export type ProblemSolvedGroupByOutputType = {
    id: string
    userId: string
    problemId: string
    createdAt: Date
    updatedAt: Date
    _count: ProblemSolvedCountAggregateOutputType | null
    _min: ProblemSolvedMinAggregateOutputType | null
    _max: ProblemSolvedMaxAggregateOutputType | null
  }

  type GetProblemSolvedGroupByPayload<T extends ProblemSolvedGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProblemSolvedGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProblemSolvedGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProblemSolvedGroupByOutputType[P]>
            : GetScalarType<T[P], ProblemSolvedGroupByOutputType[P]>
        }
      >
    >


  export type ProblemSolvedSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    problemId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["problemSolved"]>

  export type ProblemSolvedSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    problemId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["problemSolved"]>

  export type ProblemSolvedSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    problemId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["problemSolved"]>

  export type ProblemSolvedSelectScalar = {
    id?: boolean
    userId?: boolean
    problemId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProblemSolvedOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "problemId" | "createdAt" | "updatedAt", ExtArgs["result"]["problemSolved"]>
  export type ProblemSolvedInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }
  export type ProblemSolvedIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }
  export type ProblemSolvedIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }

  export type $ProblemSolvedPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProblemSolved"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      problem: Prisma.$ProblemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      problemId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["problemSolved"]>
    composites: {}
  }

  type ProblemSolvedGetPayload<S extends boolean | null | undefined | ProblemSolvedDefaultArgs> = $Result.GetResult<Prisma.$ProblemSolvedPayload, S>

  type ProblemSolvedCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProblemSolvedFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProblemSolvedCountAggregateInputType | true
    }

  export interface ProblemSolvedDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProblemSolved'], meta: { name: 'ProblemSolved' } }
    /**
     * Find zero or one ProblemSolved that matches the filter.
     * @param {ProblemSolvedFindUniqueArgs} args - Arguments to find a ProblemSolved
     * @example
     * // Get one ProblemSolved
     * const problemSolved = await prisma.problemSolved.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProblemSolvedFindUniqueArgs>(args: SelectSubset<T, ProblemSolvedFindUniqueArgs<ExtArgs>>): Prisma__ProblemSolvedClient<$Result.GetResult<Prisma.$ProblemSolvedPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProblemSolved that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProblemSolvedFindUniqueOrThrowArgs} args - Arguments to find a ProblemSolved
     * @example
     * // Get one ProblemSolved
     * const problemSolved = await prisma.problemSolved.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProblemSolvedFindUniqueOrThrowArgs>(args: SelectSubset<T, ProblemSolvedFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProblemSolvedClient<$Result.GetResult<Prisma.$ProblemSolvedPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProblemSolved that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemSolvedFindFirstArgs} args - Arguments to find a ProblemSolved
     * @example
     * // Get one ProblemSolved
     * const problemSolved = await prisma.problemSolved.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProblemSolvedFindFirstArgs>(args?: SelectSubset<T, ProblemSolvedFindFirstArgs<ExtArgs>>): Prisma__ProblemSolvedClient<$Result.GetResult<Prisma.$ProblemSolvedPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProblemSolved that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemSolvedFindFirstOrThrowArgs} args - Arguments to find a ProblemSolved
     * @example
     * // Get one ProblemSolved
     * const problemSolved = await prisma.problemSolved.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProblemSolvedFindFirstOrThrowArgs>(args?: SelectSubset<T, ProblemSolvedFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProblemSolvedClient<$Result.GetResult<Prisma.$ProblemSolvedPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProblemSolveds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemSolvedFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProblemSolveds
     * const problemSolveds = await prisma.problemSolved.findMany()
     * 
     * // Get first 10 ProblemSolveds
     * const problemSolveds = await prisma.problemSolved.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const problemSolvedWithIdOnly = await prisma.problemSolved.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProblemSolvedFindManyArgs>(args?: SelectSubset<T, ProblemSolvedFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemSolvedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProblemSolved.
     * @param {ProblemSolvedCreateArgs} args - Arguments to create a ProblemSolved.
     * @example
     * // Create one ProblemSolved
     * const ProblemSolved = await prisma.problemSolved.create({
     *   data: {
     *     // ... data to create a ProblemSolved
     *   }
     * })
     * 
     */
    create<T extends ProblemSolvedCreateArgs>(args: SelectSubset<T, ProblemSolvedCreateArgs<ExtArgs>>): Prisma__ProblemSolvedClient<$Result.GetResult<Prisma.$ProblemSolvedPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProblemSolveds.
     * @param {ProblemSolvedCreateManyArgs} args - Arguments to create many ProblemSolveds.
     * @example
     * // Create many ProblemSolveds
     * const problemSolved = await prisma.problemSolved.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProblemSolvedCreateManyArgs>(args?: SelectSubset<T, ProblemSolvedCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProblemSolveds and returns the data saved in the database.
     * @param {ProblemSolvedCreateManyAndReturnArgs} args - Arguments to create many ProblemSolveds.
     * @example
     * // Create many ProblemSolveds
     * const problemSolved = await prisma.problemSolved.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProblemSolveds and only return the `id`
     * const problemSolvedWithIdOnly = await prisma.problemSolved.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProblemSolvedCreateManyAndReturnArgs>(args?: SelectSubset<T, ProblemSolvedCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemSolvedPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProblemSolved.
     * @param {ProblemSolvedDeleteArgs} args - Arguments to delete one ProblemSolved.
     * @example
     * // Delete one ProblemSolved
     * const ProblemSolved = await prisma.problemSolved.delete({
     *   where: {
     *     // ... filter to delete one ProblemSolved
     *   }
     * })
     * 
     */
    delete<T extends ProblemSolvedDeleteArgs>(args: SelectSubset<T, ProblemSolvedDeleteArgs<ExtArgs>>): Prisma__ProblemSolvedClient<$Result.GetResult<Prisma.$ProblemSolvedPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProblemSolved.
     * @param {ProblemSolvedUpdateArgs} args - Arguments to update one ProblemSolved.
     * @example
     * // Update one ProblemSolved
     * const problemSolved = await prisma.problemSolved.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProblemSolvedUpdateArgs>(args: SelectSubset<T, ProblemSolvedUpdateArgs<ExtArgs>>): Prisma__ProblemSolvedClient<$Result.GetResult<Prisma.$ProblemSolvedPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProblemSolveds.
     * @param {ProblemSolvedDeleteManyArgs} args - Arguments to filter ProblemSolveds to delete.
     * @example
     * // Delete a few ProblemSolveds
     * const { count } = await prisma.problemSolved.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProblemSolvedDeleteManyArgs>(args?: SelectSubset<T, ProblemSolvedDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProblemSolveds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemSolvedUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProblemSolveds
     * const problemSolved = await prisma.problemSolved.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProblemSolvedUpdateManyArgs>(args: SelectSubset<T, ProblemSolvedUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProblemSolveds and returns the data updated in the database.
     * @param {ProblemSolvedUpdateManyAndReturnArgs} args - Arguments to update many ProblemSolveds.
     * @example
     * // Update many ProblemSolveds
     * const problemSolved = await prisma.problemSolved.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProblemSolveds and only return the `id`
     * const problemSolvedWithIdOnly = await prisma.problemSolved.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProblemSolvedUpdateManyAndReturnArgs>(args: SelectSubset<T, ProblemSolvedUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemSolvedPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProblemSolved.
     * @param {ProblemSolvedUpsertArgs} args - Arguments to update or create a ProblemSolved.
     * @example
     * // Update or create a ProblemSolved
     * const problemSolved = await prisma.problemSolved.upsert({
     *   create: {
     *     // ... data to create a ProblemSolved
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProblemSolved we want to update
     *   }
     * })
     */
    upsert<T extends ProblemSolvedUpsertArgs>(args: SelectSubset<T, ProblemSolvedUpsertArgs<ExtArgs>>): Prisma__ProblemSolvedClient<$Result.GetResult<Prisma.$ProblemSolvedPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProblemSolveds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemSolvedCountArgs} args - Arguments to filter ProblemSolveds to count.
     * @example
     * // Count the number of ProblemSolveds
     * const count = await prisma.problemSolved.count({
     *   where: {
     *     // ... the filter for the ProblemSolveds we want to count
     *   }
     * })
    **/
    count<T extends ProblemSolvedCountArgs>(
      args?: Subset<T, ProblemSolvedCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProblemSolvedCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProblemSolved.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemSolvedAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProblemSolvedAggregateArgs>(args: Subset<T, ProblemSolvedAggregateArgs>): Prisma.PrismaPromise<GetProblemSolvedAggregateType<T>>

    /**
     * Group by ProblemSolved.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemSolvedGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProblemSolvedGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProblemSolvedGroupByArgs['orderBy'] }
        : { orderBy?: ProblemSolvedGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProblemSolvedGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProblemSolvedGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProblemSolved model
   */
  readonly fields: ProblemSolvedFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProblemSolved.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProblemSolvedClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    problem<T extends ProblemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProblemDefaultArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProblemSolved model
   */
  interface ProblemSolvedFieldRefs {
    readonly id: FieldRef<"ProblemSolved", 'String'>
    readonly userId: FieldRef<"ProblemSolved", 'String'>
    readonly problemId: FieldRef<"ProblemSolved", 'String'>
    readonly createdAt: FieldRef<"ProblemSolved", 'DateTime'>
    readonly updatedAt: FieldRef<"ProblemSolved", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProblemSolved findUnique
   */
  export type ProblemSolvedFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemSolved
     */
    select?: ProblemSolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemSolved
     */
    omit?: ProblemSolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemSolvedInclude<ExtArgs> | null
    /**
     * Filter, which ProblemSolved to fetch.
     */
    where: ProblemSolvedWhereUniqueInput
  }

  /**
   * ProblemSolved findUniqueOrThrow
   */
  export type ProblemSolvedFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemSolved
     */
    select?: ProblemSolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemSolved
     */
    omit?: ProblemSolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemSolvedInclude<ExtArgs> | null
    /**
     * Filter, which ProblemSolved to fetch.
     */
    where: ProblemSolvedWhereUniqueInput
  }

  /**
   * ProblemSolved findFirst
   */
  export type ProblemSolvedFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemSolved
     */
    select?: ProblemSolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemSolved
     */
    omit?: ProblemSolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemSolvedInclude<ExtArgs> | null
    /**
     * Filter, which ProblemSolved to fetch.
     */
    where?: ProblemSolvedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProblemSolveds to fetch.
     */
    orderBy?: ProblemSolvedOrderByWithRelationInput | ProblemSolvedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProblemSolveds.
     */
    cursor?: ProblemSolvedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProblemSolveds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProblemSolveds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProblemSolveds.
     */
    distinct?: ProblemSolvedScalarFieldEnum | ProblemSolvedScalarFieldEnum[]
  }

  /**
   * ProblemSolved findFirstOrThrow
   */
  export type ProblemSolvedFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemSolved
     */
    select?: ProblemSolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemSolved
     */
    omit?: ProblemSolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemSolvedInclude<ExtArgs> | null
    /**
     * Filter, which ProblemSolved to fetch.
     */
    where?: ProblemSolvedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProblemSolveds to fetch.
     */
    orderBy?: ProblemSolvedOrderByWithRelationInput | ProblemSolvedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProblemSolveds.
     */
    cursor?: ProblemSolvedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProblemSolveds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProblemSolveds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProblemSolveds.
     */
    distinct?: ProblemSolvedScalarFieldEnum | ProblemSolvedScalarFieldEnum[]
  }

  /**
   * ProblemSolved findMany
   */
  export type ProblemSolvedFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemSolved
     */
    select?: ProblemSolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemSolved
     */
    omit?: ProblemSolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemSolvedInclude<ExtArgs> | null
    /**
     * Filter, which ProblemSolveds to fetch.
     */
    where?: ProblemSolvedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProblemSolveds to fetch.
     */
    orderBy?: ProblemSolvedOrderByWithRelationInput | ProblemSolvedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProblemSolveds.
     */
    cursor?: ProblemSolvedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProblemSolveds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProblemSolveds.
     */
    skip?: number
    distinct?: ProblemSolvedScalarFieldEnum | ProblemSolvedScalarFieldEnum[]
  }

  /**
   * ProblemSolved create
   */
  export type ProblemSolvedCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemSolved
     */
    select?: ProblemSolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemSolved
     */
    omit?: ProblemSolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemSolvedInclude<ExtArgs> | null
    /**
     * The data needed to create a ProblemSolved.
     */
    data: XOR<ProblemSolvedCreateInput, ProblemSolvedUncheckedCreateInput>
  }

  /**
   * ProblemSolved createMany
   */
  export type ProblemSolvedCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProblemSolveds.
     */
    data: ProblemSolvedCreateManyInput | ProblemSolvedCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProblemSolved createManyAndReturn
   */
  export type ProblemSolvedCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemSolved
     */
    select?: ProblemSolvedSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemSolved
     */
    omit?: ProblemSolvedOmit<ExtArgs> | null
    /**
     * The data used to create many ProblemSolveds.
     */
    data: ProblemSolvedCreateManyInput | ProblemSolvedCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemSolvedIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProblemSolved update
   */
  export type ProblemSolvedUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemSolved
     */
    select?: ProblemSolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemSolved
     */
    omit?: ProblemSolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemSolvedInclude<ExtArgs> | null
    /**
     * The data needed to update a ProblemSolved.
     */
    data: XOR<ProblemSolvedUpdateInput, ProblemSolvedUncheckedUpdateInput>
    /**
     * Choose, which ProblemSolved to update.
     */
    where: ProblemSolvedWhereUniqueInput
  }

  /**
   * ProblemSolved updateMany
   */
  export type ProblemSolvedUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProblemSolveds.
     */
    data: XOR<ProblemSolvedUpdateManyMutationInput, ProblemSolvedUncheckedUpdateManyInput>
    /**
     * Filter which ProblemSolveds to update
     */
    where?: ProblemSolvedWhereInput
    /**
     * Limit how many ProblemSolveds to update.
     */
    limit?: number
  }

  /**
   * ProblemSolved updateManyAndReturn
   */
  export type ProblemSolvedUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemSolved
     */
    select?: ProblemSolvedSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemSolved
     */
    omit?: ProblemSolvedOmit<ExtArgs> | null
    /**
     * The data used to update ProblemSolveds.
     */
    data: XOR<ProblemSolvedUpdateManyMutationInput, ProblemSolvedUncheckedUpdateManyInput>
    /**
     * Filter which ProblemSolveds to update
     */
    where?: ProblemSolvedWhereInput
    /**
     * Limit how many ProblemSolveds to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemSolvedIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProblemSolved upsert
   */
  export type ProblemSolvedUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemSolved
     */
    select?: ProblemSolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemSolved
     */
    omit?: ProblemSolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemSolvedInclude<ExtArgs> | null
    /**
     * The filter to search for the ProblemSolved to update in case it exists.
     */
    where: ProblemSolvedWhereUniqueInput
    /**
     * In case the ProblemSolved found by the `where` argument doesn't exist, create a new ProblemSolved with this data.
     */
    create: XOR<ProblemSolvedCreateInput, ProblemSolvedUncheckedCreateInput>
    /**
     * In case the ProblemSolved was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProblemSolvedUpdateInput, ProblemSolvedUncheckedUpdateInput>
  }

  /**
   * ProblemSolved delete
   */
  export type ProblemSolvedDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemSolved
     */
    select?: ProblemSolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemSolved
     */
    omit?: ProblemSolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemSolvedInclude<ExtArgs> | null
    /**
     * Filter which ProblemSolved to delete.
     */
    where: ProblemSolvedWhereUniqueInput
  }

  /**
   * ProblemSolved deleteMany
   */
  export type ProblemSolvedDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProblemSolveds to delete
     */
    where?: ProblemSolvedWhereInput
    /**
     * Limit how many ProblemSolveds to delete.
     */
    limit?: number
  }

  /**
   * ProblemSolved without action
   */
  export type ProblemSolvedDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemSolved
     */
    select?: ProblemSolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemSolved
     */
    omit?: ProblemSolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemSolvedInclude<ExtArgs> | null
  }


  /**
   * Model Playlist
   */

  export type AggregatePlaylist = {
    _count: PlaylistCountAggregateOutputType | null
    _min: PlaylistMinAggregateOutputType | null
    _max: PlaylistMaxAggregateOutputType | null
  }

  export type PlaylistMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlaylistMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlaylistCountAggregateOutputType = {
    id: number
    name: number
    description: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PlaylistMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlaylistMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlaylistCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PlaylistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Playlist to aggregate.
     */
    where?: PlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Playlists to fetch.
     */
    orderBy?: PlaylistOrderByWithRelationInput | PlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Playlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Playlists
    **/
    _count?: true | PlaylistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlaylistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlaylistMaxAggregateInputType
  }

  export type GetPlaylistAggregateType<T extends PlaylistAggregateArgs> = {
        [P in keyof T & keyof AggregatePlaylist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlaylist[P]>
      : GetScalarType<T[P], AggregatePlaylist[P]>
  }




  export type PlaylistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlaylistWhereInput
    orderBy?: PlaylistOrderByWithAggregationInput | PlaylistOrderByWithAggregationInput[]
    by: PlaylistScalarFieldEnum[] | PlaylistScalarFieldEnum
    having?: PlaylistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlaylistCountAggregateInputType | true
    _min?: PlaylistMinAggregateInputType
    _max?: PlaylistMaxAggregateInputType
  }

  export type PlaylistGroupByOutputType = {
    id: string
    name: string
    description: string | null
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: PlaylistCountAggregateOutputType | null
    _min: PlaylistMinAggregateOutputType | null
    _max: PlaylistMaxAggregateOutputType | null
  }

  type GetPlaylistGroupByPayload<T extends PlaylistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlaylistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlaylistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlaylistGroupByOutputType[P]>
            : GetScalarType<T[P], PlaylistGroupByOutputType[P]>
        }
      >
    >


  export type PlaylistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    problems?: boolean | Playlist$problemsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | PlaylistCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playlist"]>

  export type PlaylistSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playlist"]>

  export type PlaylistSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playlist"]>

  export type PlaylistSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PlaylistOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["playlist"]>
  export type PlaylistInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    problems?: boolean | Playlist$problemsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | PlaylistCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PlaylistIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PlaylistIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PlaylistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Playlist"
    objects: {
      problems: Prisma.$ProblemInPlaylistPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["playlist"]>
    composites: {}
  }

  type PlaylistGetPayload<S extends boolean | null | undefined | PlaylistDefaultArgs> = $Result.GetResult<Prisma.$PlaylistPayload, S>

  type PlaylistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlaylistFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlaylistCountAggregateInputType | true
    }

  export interface PlaylistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Playlist'], meta: { name: 'Playlist' } }
    /**
     * Find zero or one Playlist that matches the filter.
     * @param {PlaylistFindUniqueArgs} args - Arguments to find a Playlist
     * @example
     * // Get one Playlist
     * const playlist = await prisma.playlist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlaylistFindUniqueArgs>(args: SelectSubset<T, PlaylistFindUniqueArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Playlist that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlaylistFindUniqueOrThrowArgs} args - Arguments to find a Playlist
     * @example
     * // Get one Playlist
     * const playlist = await prisma.playlist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlaylistFindUniqueOrThrowArgs>(args: SelectSubset<T, PlaylistFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Playlist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistFindFirstArgs} args - Arguments to find a Playlist
     * @example
     * // Get one Playlist
     * const playlist = await prisma.playlist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlaylistFindFirstArgs>(args?: SelectSubset<T, PlaylistFindFirstArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Playlist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistFindFirstOrThrowArgs} args - Arguments to find a Playlist
     * @example
     * // Get one Playlist
     * const playlist = await prisma.playlist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlaylistFindFirstOrThrowArgs>(args?: SelectSubset<T, PlaylistFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Playlists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Playlists
     * const playlists = await prisma.playlist.findMany()
     * 
     * // Get first 10 Playlists
     * const playlists = await prisma.playlist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playlistWithIdOnly = await prisma.playlist.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlaylistFindManyArgs>(args?: SelectSubset<T, PlaylistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Playlist.
     * @param {PlaylistCreateArgs} args - Arguments to create a Playlist.
     * @example
     * // Create one Playlist
     * const Playlist = await prisma.playlist.create({
     *   data: {
     *     // ... data to create a Playlist
     *   }
     * })
     * 
     */
    create<T extends PlaylistCreateArgs>(args: SelectSubset<T, PlaylistCreateArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Playlists.
     * @param {PlaylistCreateManyArgs} args - Arguments to create many Playlists.
     * @example
     * // Create many Playlists
     * const playlist = await prisma.playlist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlaylistCreateManyArgs>(args?: SelectSubset<T, PlaylistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Playlists and returns the data saved in the database.
     * @param {PlaylistCreateManyAndReturnArgs} args - Arguments to create many Playlists.
     * @example
     * // Create many Playlists
     * const playlist = await prisma.playlist.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Playlists and only return the `id`
     * const playlistWithIdOnly = await prisma.playlist.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlaylistCreateManyAndReturnArgs>(args?: SelectSubset<T, PlaylistCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Playlist.
     * @param {PlaylistDeleteArgs} args - Arguments to delete one Playlist.
     * @example
     * // Delete one Playlist
     * const Playlist = await prisma.playlist.delete({
     *   where: {
     *     // ... filter to delete one Playlist
     *   }
     * })
     * 
     */
    delete<T extends PlaylistDeleteArgs>(args: SelectSubset<T, PlaylistDeleteArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Playlist.
     * @param {PlaylistUpdateArgs} args - Arguments to update one Playlist.
     * @example
     * // Update one Playlist
     * const playlist = await prisma.playlist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlaylistUpdateArgs>(args: SelectSubset<T, PlaylistUpdateArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Playlists.
     * @param {PlaylistDeleteManyArgs} args - Arguments to filter Playlists to delete.
     * @example
     * // Delete a few Playlists
     * const { count } = await prisma.playlist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlaylistDeleteManyArgs>(args?: SelectSubset<T, PlaylistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Playlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Playlists
     * const playlist = await prisma.playlist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlaylistUpdateManyArgs>(args: SelectSubset<T, PlaylistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Playlists and returns the data updated in the database.
     * @param {PlaylistUpdateManyAndReturnArgs} args - Arguments to update many Playlists.
     * @example
     * // Update many Playlists
     * const playlist = await prisma.playlist.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Playlists and only return the `id`
     * const playlistWithIdOnly = await prisma.playlist.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PlaylistUpdateManyAndReturnArgs>(args: SelectSubset<T, PlaylistUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Playlist.
     * @param {PlaylistUpsertArgs} args - Arguments to update or create a Playlist.
     * @example
     * // Update or create a Playlist
     * const playlist = await prisma.playlist.upsert({
     *   create: {
     *     // ... data to create a Playlist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Playlist we want to update
     *   }
     * })
     */
    upsert<T extends PlaylistUpsertArgs>(args: SelectSubset<T, PlaylistUpsertArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Playlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistCountArgs} args - Arguments to filter Playlists to count.
     * @example
     * // Count the number of Playlists
     * const count = await prisma.playlist.count({
     *   where: {
     *     // ... the filter for the Playlists we want to count
     *   }
     * })
    **/
    count<T extends PlaylistCountArgs>(
      args?: Subset<T, PlaylistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlaylistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Playlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlaylistAggregateArgs>(args: Subset<T, PlaylistAggregateArgs>): Prisma.PrismaPromise<GetPlaylistAggregateType<T>>

    /**
     * Group by Playlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlaylistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlaylistGroupByArgs['orderBy'] }
        : { orderBy?: PlaylistGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlaylistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlaylistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Playlist model
   */
  readonly fields: PlaylistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Playlist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlaylistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    problems<T extends Playlist$problemsArgs<ExtArgs> = {}>(args?: Subset<T, Playlist$problemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemInPlaylistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Playlist model
   */
  interface PlaylistFieldRefs {
    readonly id: FieldRef<"Playlist", 'String'>
    readonly name: FieldRef<"Playlist", 'String'>
    readonly description: FieldRef<"Playlist", 'String'>
    readonly userId: FieldRef<"Playlist", 'String'>
    readonly createdAt: FieldRef<"Playlist", 'DateTime'>
    readonly updatedAt: FieldRef<"Playlist", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Playlist findUnique
   */
  export type PlaylistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter, which Playlist to fetch.
     */
    where: PlaylistWhereUniqueInput
  }

  /**
   * Playlist findUniqueOrThrow
   */
  export type PlaylistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter, which Playlist to fetch.
     */
    where: PlaylistWhereUniqueInput
  }

  /**
   * Playlist findFirst
   */
  export type PlaylistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter, which Playlist to fetch.
     */
    where?: PlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Playlists to fetch.
     */
    orderBy?: PlaylistOrderByWithRelationInput | PlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Playlists.
     */
    cursor?: PlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Playlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Playlists.
     */
    distinct?: PlaylistScalarFieldEnum | PlaylistScalarFieldEnum[]
  }

  /**
   * Playlist findFirstOrThrow
   */
  export type PlaylistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter, which Playlist to fetch.
     */
    where?: PlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Playlists to fetch.
     */
    orderBy?: PlaylistOrderByWithRelationInput | PlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Playlists.
     */
    cursor?: PlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Playlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Playlists.
     */
    distinct?: PlaylistScalarFieldEnum | PlaylistScalarFieldEnum[]
  }

  /**
   * Playlist findMany
   */
  export type PlaylistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter, which Playlists to fetch.
     */
    where?: PlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Playlists to fetch.
     */
    orderBy?: PlaylistOrderByWithRelationInput | PlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Playlists.
     */
    cursor?: PlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Playlists.
     */
    skip?: number
    distinct?: PlaylistScalarFieldEnum | PlaylistScalarFieldEnum[]
  }

  /**
   * Playlist create
   */
  export type PlaylistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * The data needed to create a Playlist.
     */
    data: XOR<PlaylistCreateInput, PlaylistUncheckedCreateInput>
  }

  /**
   * Playlist createMany
   */
  export type PlaylistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Playlists.
     */
    data: PlaylistCreateManyInput | PlaylistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Playlist createManyAndReturn
   */
  export type PlaylistCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * The data used to create many Playlists.
     */
    data: PlaylistCreateManyInput | PlaylistCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Playlist update
   */
  export type PlaylistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * The data needed to update a Playlist.
     */
    data: XOR<PlaylistUpdateInput, PlaylistUncheckedUpdateInput>
    /**
     * Choose, which Playlist to update.
     */
    where: PlaylistWhereUniqueInput
  }

  /**
   * Playlist updateMany
   */
  export type PlaylistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Playlists.
     */
    data: XOR<PlaylistUpdateManyMutationInput, PlaylistUncheckedUpdateManyInput>
    /**
     * Filter which Playlists to update
     */
    where?: PlaylistWhereInput
    /**
     * Limit how many Playlists to update.
     */
    limit?: number
  }

  /**
   * Playlist updateManyAndReturn
   */
  export type PlaylistUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * The data used to update Playlists.
     */
    data: XOR<PlaylistUpdateManyMutationInput, PlaylistUncheckedUpdateManyInput>
    /**
     * Filter which Playlists to update
     */
    where?: PlaylistWhereInput
    /**
     * Limit how many Playlists to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Playlist upsert
   */
  export type PlaylistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * The filter to search for the Playlist to update in case it exists.
     */
    where: PlaylistWhereUniqueInput
    /**
     * In case the Playlist found by the `where` argument doesn't exist, create a new Playlist with this data.
     */
    create: XOR<PlaylistCreateInput, PlaylistUncheckedCreateInput>
    /**
     * In case the Playlist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlaylistUpdateInput, PlaylistUncheckedUpdateInput>
  }

  /**
   * Playlist delete
   */
  export type PlaylistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter which Playlist to delete.
     */
    where: PlaylistWhereUniqueInput
  }

  /**
   * Playlist deleteMany
   */
  export type PlaylistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Playlists to delete
     */
    where?: PlaylistWhereInput
    /**
     * Limit how many Playlists to delete.
     */
    limit?: number
  }

  /**
   * Playlist.problems
   */
  export type Playlist$problemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemInPlaylist
     */
    select?: ProblemInPlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemInPlaylist
     */
    omit?: ProblemInPlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInPlaylistInclude<ExtArgs> | null
    where?: ProblemInPlaylistWhereInput
    orderBy?: ProblemInPlaylistOrderByWithRelationInput | ProblemInPlaylistOrderByWithRelationInput[]
    cursor?: ProblemInPlaylistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProblemInPlaylistScalarFieldEnum | ProblemInPlaylistScalarFieldEnum[]
  }

  /**
   * Playlist without action
   */
  export type PlaylistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
  }


  /**
   * Model ProblemInPlaylist
   */

  export type AggregateProblemInPlaylist = {
    _count: ProblemInPlaylistCountAggregateOutputType | null
    _min: ProblemInPlaylistMinAggregateOutputType | null
    _max: ProblemInPlaylistMaxAggregateOutputType | null
  }

  export type ProblemInPlaylistMinAggregateOutputType = {
    id: string | null
    problemId: string | null
    playlistId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProblemInPlaylistMaxAggregateOutputType = {
    id: string | null
    problemId: string | null
    playlistId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProblemInPlaylistCountAggregateOutputType = {
    id: number
    problemId: number
    playlistId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProblemInPlaylistMinAggregateInputType = {
    id?: true
    problemId?: true
    playlistId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProblemInPlaylistMaxAggregateInputType = {
    id?: true
    problemId?: true
    playlistId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProblemInPlaylistCountAggregateInputType = {
    id?: true
    problemId?: true
    playlistId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProblemInPlaylistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProblemInPlaylist to aggregate.
     */
    where?: ProblemInPlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProblemInPlaylists to fetch.
     */
    orderBy?: ProblemInPlaylistOrderByWithRelationInput | ProblemInPlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProblemInPlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProblemInPlaylists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProblemInPlaylists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProblemInPlaylists
    **/
    _count?: true | ProblemInPlaylistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProblemInPlaylistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProblemInPlaylistMaxAggregateInputType
  }

  export type GetProblemInPlaylistAggregateType<T extends ProblemInPlaylistAggregateArgs> = {
        [P in keyof T & keyof AggregateProblemInPlaylist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProblemInPlaylist[P]>
      : GetScalarType<T[P], AggregateProblemInPlaylist[P]>
  }




  export type ProblemInPlaylistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProblemInPlaylistWhereInput
    orderBy?: ProblemInPlaylistOrderByWithAggregationInput | ProblemInPlaylistOrderByWithAggregationInput[]
    by: ProblemInPlaylistScalarFieldEnum[] | ProblemInPlaylistScalarFieldEnum
    having?: ProblemInPlaylistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProblemInPlaylistCountAggregateInputType | true
    _min?: ProblemInPlaylistMinAggregateInputType
    _max?: ProblemInPlaylistMaxAggregateInputType
  }

  export type ProblemInPlaylistGroupByOutputType = {
    id: string
    problemId: string
    playlistId: string
    createdAt: Date
    updatedAt: Date
    _count: ProblemInPlaylistCountAggregateOutputType | null
    _min: ProblemInPlaylistMinAggregateOutputType | null
    _max: ProblemInPlaylistMaxAggregateOutputType | null
  }

  type GetProblemInPlaylistGroupByPayload<T extends ProblemInPlaylistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProblemInPlaylistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProblemInPlaylistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProblemInPlaylistGroupByOutputType[P]>
            : GetScalarType<T[P], ProblemInPlaylistGroupByOutputType[P]>
        }
      >
    >


  export type ProblemInPlaylistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    problemId?: boolean
    playlistId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    playlist?: boolean | PlaylistDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["problemInPlaylist"]>

  export type ProblemInPlaylistSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    problemId?: boolean
    playlistId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    playlist?: boolean | PlaylistDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["problemInPlaylist"]>

  export type ProblemInPlaylistSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    problemId?: boolean
    playlistId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    playlist?: boolean | PlaylistDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["problemInPlaylist"]>

  export type ProblemInPlaylistSelectScalar = {
    id?: boolean
    problemId?: boolean
    playlistId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProblemInPlaylistOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "problemId" | "playlistId" | "createdAt" | "updatedAt", ExtArgs["result"]["problemInPlaylist"]>
  export type ProblemInPlaylistInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    playlist?: boolean | PlaylistDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }
  export type ProblemInPlaylistIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    playlist?: boolean | PlaylistDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }
  export type ProblemInPlaylistIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    playlist?: boolean | PlaylistDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }

  export type $ProblemInPlaylistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProblemInPlaylist"
    objects: {
      playlist: Prisma.$PlaylistPayload<ExtArgs>
      problem: Prisma.$ProblemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      problemId: string
      playlistId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["problemInPlaylist"]>
    composites: {}
  }

  type ProblemInPlaylistGetPayload<S extends boolean | null | undefined | ProblemInPlaylistDefaultArgs> = $Result.GetResult<Prisma.$ProblemInPlaylistPayload, S>

  type ProblemInPlaylistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProblemInPlaylistFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProblemInPlaylistCountAggregateInputType | true
    }

  export interface ProblemInPlaylistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProblemInPlaylist'], meta: { name: 'ProblemInPlaylist' } }
    /**
     * Find zero or one ProblemInPlaylist that matches the filter.
     * @param {ProblemInPlaylistFindUniqueArgs} args - Arguments to find a ProblemInPlaylist
     * @example
     * // Get one ProblemInPlaylist
     * const problemInPlaylist = await prisma.problemInPlaylist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProblemInPlaylistFindUniqueArgs>(args: SelectSubset<T, ProblemInPlaylistFindUniqueArgs<ExtArgs>>): Prisma__ProblemInPlaylistClient<$Result.GetResult<Prisma.$ProblemInPlaylistPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProblemInPlaylist that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProblemInPlaylistFindUniqueOrThrowArgs} args - Arguments to find a ProblemInPlaylist
     * @example
     * // Get one ProblemInPlaylist
     * const problemInPlaylist = await prisma.problemInPlaylist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProblemInPlaylistFindUniqueOrThrowArgs>(args: SelectSubset<T, ProblemInPlaylistFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProblemInPlaylistClient<$Result.GetResult<Prisma.$ProblemInPlaylistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProblemInPlaylist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemInPlaylistFindFirstArgs} args - Arguments to find a ProblemInPlaylist
     * @example
     * // Get one ProblemInPlaylist
     * const problemInPlaylist = await prisma.problemInPlaylist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProblemInPlaylistFindFirstArgs>(args?: SelectSubset<T, ProblemInPlaylistFindFirstArgs<ExtArgs>>): Prisma__ProblemInPlaylistClient<$Result.GetResult<Prisma.$ProblemInPlaylistPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProblemInPlaylist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemInPlaylistFindFirstOrThrowArgs} args - Arguments to find a ProblemInPlaylist
     * @example
     * // Get one ProblemInPlaylist
     * const problemInPlaylist = await prisma.problemInPlaylist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProblemInPlaylistFindFirstOrThrowArgs>(args?: SelectSubset<T, ProblemInPlaylistFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProblemInPlaylistClient<$Result.GetResult<Prisma.$ProblemInPlaylistPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProblemInPlaylists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemInPlaylistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProblemInPlaylists
     * const problemInPlaylists = await prisma.problemInPlaylist.findMany()
     * 
     * // Get first 10 ProblemInPlaylists
     * const problemInPlaylists = await prisma.problemInPlaylist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const problemInPlaylistWithIdOnly = await prisma.problemInPlaylist.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProblemInPlaylistFindManyArgs>(args?: SelectSubset<T, ProblemInPlaylistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemInPlaylistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProblemInPlaylist.
     * @param {ProblemInPlaylistCreateArgs} args - Arguments to create a ProblemInPlaylist.
     * @example
     * // Create one ProblemInPlaylist
     * const ProblemInPlaylist = await prisma.problemInPlaylist.create({
     *   data: {
     *     // ... data to create a ProblemInPlaylist
     *   }
     * })
     * 
     */
    create<T extends ProblemInPlaylistCreateArgs>(args: SelectSubset<T, ProblemInPlaylistCreateArgs<ExtArgs>>): Prisma__ProblemInPlaylistClient<$Result.GetResult<Prisma.$ProblemInPlaylistPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProblemInPlaylists.
     * @param {ProblemInPlaylistCreateManyArgs} args - Arguments to create many ProblemInPlaylists.
     * @example
     * // Create many ProblemInPlaylists
     * const problemInPlaylist = await prisma.problemInPlaylist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProblemInPlaylistCreateManyArgs>(args?: SelectSubset<T, ProblemInPlaylistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProblemInPlaylists and returns the data saved in the database.
     * @param {ProblemInPlaylistCreateManyAndReturnArgs} args - Arguments to create many ProblemInPlaylists.
     * @example
     * // Create many ProblemInPlaylists
     * const problemInPlaylist = await prisma.problemInPlaylist.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProblemInPlaylists and only return the `id`
     * const problemInPlaylistWithIdOnly = await prisma.problemInPlaylist.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProblemInPlaylistCreateManyAndReturnArgs>(args?: SelectSubset<T, ProblemInPlaylistCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemInPlaylistPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProblemInPlaylist.
     * @param {ProblemInPlaylistDeleteArgs} args - Arguments to delete one ProblemInPlaylist.
     * @example
     * // Delete one ProblemInPlaylist
     * const ProblemInPlaylist = await prisma.problemInPlaylist.delete({
     *   where: {
     *     // ... filter to delete one ProblemInPlaylist
     *   }
     * })
     * 
     */
    delete<T extends ProblemInPlaylistDeleteArgs>(args: SelectSubset<T, ProblemInPlaylistDeleteArgs<ExtArgs>>): Prisma__ProblemInPlaylistClient<$Result.GetResult<Prisma.$ProblemInPlaylistPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProblemInPlaylist.
     * @param {ProblemInPlaylistUpdateArgs} args - Arguments to update one ProblemInPlaylist.
     * @example
     * // Update one ProblemInPlaylist
     * const problemInPlaylist = await prisma.problemInPlaylist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProblemInPlaylistUpdateArgs>(args: SelectSubset<T, ProblemInPlaylistUpdateArgs<ExtArgs>>): Prisma__ProblemInPlaylistClient<$Result.GetResult<Prisma.$ProblemInPlaylistPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProblemInPlaylists.
     * @param {ProblemInPlaylistDeleteManyArgs} args - Arguments to filter ProblemInPlaylists to delete.
     * @example
     * // Delete a few ProblemInPlaylists
     * const { count } = await prisma.problemInPlaylist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProblemInPlaylistDeleteManyArgs>(args?: SelectSubset<T, ProblemInPlaylistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProblemInPlaylists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemInPlaylistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProblemInPlaylists
     * const problemInPlaylist = await prisma.problemInPlaylist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProblemInPlaylistUpdateManyArgs>(args: SelectSubset<T, ProblemInPlaylistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProblemInPlaylists and returns the data updated in the database.
     * @param {ProblemInPlaylistUpdateManyAndReturnArgs} args - Arguments to update many ProblemInPlaylists.
     * @example
     * // Update many ProblemInPlaylists
     * const problemInPlaylist = await prisma.problemInPlaylist.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProblemInPlaylists and only return the `id`
     * const problemInPlaylistWithIdOnly = await prisma.problemInPlaylist.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProblemInPlaylistUpdateManyAndReturnArgs>(args: SelectSubset<T, ProblemInPlaylistUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemInPlaylistPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProblemInPlaylist.
     * @param {ProblemInPlaylistUpsertArgs} args - Arguments to update or create a ProblemInPlaylist.
     * @example
     * // Update or create a ProblemInPlaylist
     * const problemInPlaylist = await prisma.problemInPlaylist.upsert({
     *   create: {
     *     // ... data to create a ProblemInPlaylist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProblemInPlaylist we want to update
     *   }
     * })
     */
    upsert<T extends ProblemInPlaylistUpsertArgs>(args: SelectSubset<T, ProblemInPlaylistUpsertArgs<ExtArgs>>): Prisma__ProblemInPlaylistClient<$Result.GetResult<Prisma.$ProblemInPlaylistPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProblemInPlaylists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemInPlaylistCountArgs} args - Arguments to filter ProblemInPlaylists to count.
     * @example
     * // Count the number of ProblemInPlaylists
     * const count = await prisma.problemInPlaylist.count({
     *   where: {
     *     // ... the filter for the ProblemInPlaylists we want to count
     *   }
     * })
    **/
    count<T extends ProblemInPlaylistCountArgs>(
      args?: Subset<T, ProblemInPlaylistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProblemInPlaylistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProblemInPlaylist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemInPlaylistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProblemInPlaylistAggregateArgs>(args: Subset<T, ProblemInPlaylistAggregateArgs>): Prisma.PrismaPromise<GetProblemInPlaylistAggregateType<T>>

    /**
     * Group by ProblemInPlaylist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemInPlaylistGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProblemInPlaylistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProblemInPlaylistGroupByArgs['orderBy'] }
        : { orderBy?: ProblemInPlaylistGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProblemInPlaylistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProblemInPlaylistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProblemInPlaylist model
   */
  readonly fields: ProblemInPlaylistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProblemInPlaylist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProblemInPlaylistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    playlist<T extends PlaylistDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlaylistDefaultArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    problem<T extends ProblemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProblemDefaultArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProblemInPlaylist model
   */
  interface ProblemInPlaylistFieldRefs {
    readonly id: FieldRef<"ProblemInPlaylist", 'String'>
    readonly problemId: FieldRef<"ProblemInPlaylist", 'String'>
    readonly playlistId: FieldRef<"ProblemInPlaylist", 'String'>
    readonly createdAt: FieldRef<"ProblemInPlaylist", 'DateTime'>
    readonly updatedAt: FieldRef<"ProblemInPlaylist", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProblemInPlaylist findUnique
   */
  export type ProblemInPlaylistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemInPlaylist
     */
    select?: ProblemInPlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemInPlaylist
     */
    omit?: ProblemInPlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInPlaylistInclude<ExtArgs> | null
    /**
     * Filter, which ProblemInPlaylist to fetch.
     */
    where: ProblemInPlaylistWhereUniqueInput
  }

  /**
   * ProblemInPlaylist findUniqueOrThrow
   */
  export type ProblemInPlaylistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemInPlaylist
     */
    select?: ProblemInPlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemInPlaylist
     */
    omit?: ProblemInPlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInPlaylistInclude<ExtArgs> | null
    /**
     * Filter, which ProblemInPlaylist to fetch.
     */
    where: ProblemInPlaylistWhereUniqueInput
  }

  /**
   * ProblemInPlaylist findFirst
   */
  export type ProblemInPlaylistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemInPlaylist
     */
    select?: ProblemInPlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemInPlaylist
     */
    omit?: ProblemInPlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInPlaylistInclude<ExtArgs> | null
    /**
     * Filter, which ProblemInPlaylist to fetch.
     */
    where?: ProblemInPlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProblemInPlaylists to fetch.
     */
    orderBy?: ProblemInPlaylistOrderByWithRelationInput | ProblemInPlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProblemInPlaylists.
     */
    cursor?: ProblemInPlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProblemInPlaylists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProblemInPlaylists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProblemInPlaylists.
     */
    distinct?: ProblemInPlaylistScalarFieldEnum | ProblemInPlaylistScalarFieldEnum[]
  }

  /**
   * ProblemInPlaylist findFirstOrThrow
   */
  export type ProblemInPlaylistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemInPlaylist
     */
    select?: ProblemInPlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemInPlaylist
     */
    omit?: ProblemInPlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInPlaylistInclude<ExtArgs> | null
    /**
     * Filter, which ProblemInPlaylist to fetch.
     */
    where?: ProblemInPlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProblemInPlaylists to fetch.
     */
    orderBy?: ProblemInPlaylistOrderByWithRelationInput | ProblemInPlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProblemInPlaylists.
     */
    cursor?: ProblemInPlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProblemInPlaylists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProblemInPlaylists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProblemInPlaylists.
     */
    distinct?: ProblemInPlaylistScalarFieldEnum | ProblemInPlaylistScalarFieldEnum[]
  }

  /**
   * ProblemInPlaylist findMany
   */
  export type ProblemInPlaylistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemInPlaylist
     */
    select?: ProblemInPlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemInPlaylist
     */
    omit?: ProblemInPlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInPlaylistInclude<ExtArgs> | null
    /**
     * Filter, which ProblemInPlaylists to fetch.
     */
    where?: ProblemInPlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProblemInPlaylists to fetch.
     */
    orderBy?: ProblemInPlaylistOrderByWithRelationInput | ProblemInPlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProblemInPlaylists.
     */
    cursor?: ProblemInPlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProblemInPlaylists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProblemInPlaylists.
     */
    skip?: number
    distinct?: ProblemInPlaylistScalarFieldEnum | ProblemInPlaylistScalarFieldEnum[]
  }

  /**
   * ProblemInPlaylist create
   */
  export type ProblemInPlaylistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemInPlaylist
     */
    select?: ProblemInPlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemInPlaylist
     */
    omit?: ProblemInPlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInPlaylistInclude<ExtArgs> | null
    /**
     * The data needed to create a ProblemInPlaylist.
     */
    data: XOR<ProblemInPlaylistCreateInput, ProblemInPlaylistUncheckedCreateInput>
  }

  /**
   * ProblemInPlaylist createMany
   */
  export type ProblemInPlaylistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProblemInPlaylists.
     */
    data: ProblemInPlaylistCreateManyInput | ProblemInPlaylistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProblemInPlaylist createManyAndReturn
   */
  export type ProblemInPlaylistCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemInPlaylist
     */
    select?: ProblemInPlaylistSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemInPlaylist
     */
    omit?: ProblemInPlaylistOmit<ExtArgs> | null
    /**
     * The data used to create many ProblemInPlaylists.
     */
    data: ProblemInPlaylistCreateManyInput | ProblemInPlaylistCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInPlaylistIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProblemInPlaylist update
   */
  export type ProblemInPlaylistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemInPlaylist
     */
    select?: ProblemInPlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemInPlaylist
     */
    omit?: ProblemInPlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInPlaylistInclude<ExtArgs> | null
    /**
     * The data needed to update a ProblemInPlaylist.
     */
    data: XOR<ProblemInPlaylistUpdateInput, ProblemInPlaylistUncheckedUpdateInput>
    /**
     * Choose, which ProblemInPlaylist to update.
     */
    where: ProblemInPlaylistWhereUniqueInput
  }

  /**
   * ProblemInPlaylist updateMany
   */
  export type ProblemInPlaylistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProblemInPlaylists.
     */
    data: XOR<ProblemInPlaylistUpdateManyMutationInput, ProblemInPlaylistUncheckedUpdateManyInput>
    /**
     * Filter which ProblemInPlaylists to update
     */
    where?: ProblemInPlaylistWhereInput
    /**
     * Limit how many ProblemInPlaylists to update.
     */
    limit?: number
  }

  /**
   * ProblemInPlaylist updateManyAndReturn
   */
  export type ProblemInPlaylistUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemInPlaylist
     */
    select?: ProblemInPlaylistSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemInPlaylist
     */
    omit?: ProblemInPlaylistOmit<ExtArgs> | null
    /**
     * The data used to update ProblemInPlaylists.
     */
    data: XOR<ProblemInPlaylistUpdateManyMutationInput, ProblemInPlaylistUncheckedUpdateManyInput>
    /**
     * Filter which ProblemInPlaylists to update
     */
    where?: ProblemInPlaylistWhereInput
    /**
     * Limit how many ProblemInPlaylists to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInPlaylistIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProblemInPlaylist upsert
   */
  export type ProblemInPlaylistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemInPlaylist
     */
    select?: ProblemInPlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemInPlaylist
     */
    omit?: ProblemInPlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInPlaylistInclude<ExtArgs> | null
    /**
     * The filter to search for the ProblemInPlaylist to update in case it exists.
     */
    where: ProblemInPlaylistWhereUniqueInput
    /**
     * In case the ProblemInPlaylist found by the `where` argument doesn't exist, create a new ProblemInPlaylist with this data.
     */
    create: XOR<ProblemInPlaylistCreateInput, ProblemInPlaylistUncheckedCreateInput>
    /**
     * In case the ProblemInPlaylist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProblemInPlaylistUpdateInput, ProblemInPlaylistUncheckedUpdateInput>
  }

  /**
   * ProblemInPlaylist delete
   */
  export type ProblemInPlaylistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemInPlaylist
     */
    select?: ProblemInPlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemInPlaylist
     */
    omit?: ProblemInPlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInPlaylistInclude<ExtArgs> | null
    /**
     * Filter which ProblemInPlaylist to delete.
     */
    where: ProblemInPlaylistWhereUniqueInput
  }

  /**
   * ProblemInPlaylist deleteMany
   */
  export type ProblemInPlaylistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProblemInPlaylists to delete
     */
    where?: ProblemInPlaylistWhereInput
    /**
     * Limit how many ProblemInPlaylists to delete.
     */
    limit?: number
  }

  /**
   * ProblemInPlaylist without action
   */
  export type ProblemInPlaylistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemInPlaylist
     */
    select?: ProblemInPlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemInPlaylist
     */
    omit?: ProblemInPlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInPlaylistInclude<ExtArgs> | null
  }


  /**
   * Model Sheet
   */

  export type AggregateSheet = {
    _count: SheetCountAggregateOutputType | null
    _avg: SheetAvgAggregateOutputType | null
    _sum: SheetSumAggregateOutputType | null
    _min: SheetMinAggregateOutputType | null
    _max: SheetMaxAggregateOutputType | null
  }

  export type SheetAvgAggregateOutputType = {
    price: number | null
  }

  export type SheetSumAggregateOutputType = {
    price: number | null
  }

  export type SheetMinAggregateOutputType = {
    id: string | null
    title: string | null
    company: string | null
    description: string | null
    userId: string | null
    price: number | null
    isPaid: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SheetMaxAggregateOutputType = {
    id: string | null
    title: string | null
    company: string | null
    description: string | null
    userId: string | null
    price: number | null
    isPaid: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SheetCountAggregateOutputType = {
    id: number
    title: number
    company: number
    description: number
    userId: number
    price: number
    isPaid: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SheetAvgAggregateInputType = {
    price?: true
  }

  export type SheetSumAggregateInputType = {
    price?: true
  }

  export type SheetMinAggregateInputType = {
    id?: true
    title?: true
    company?: true
    description?: true
    userId?: true
    price?: true
    isPaid?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SheetMaxAggregateInputType = {
    id?: true
    title?: true
    company?: true
    description?: true
    userId?: true
    price?: true
    isPaid?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SheetCountAggregateInputType = {
    id?: true
    title?: true
    company?: true
    description?: true
    userId?: true
    price?: true
    isPaid?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SheetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sheet to aggregate.
     */
    where?: SheetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sheets to fetch.
     */
    orderBy?: SheetOrderByWithRelationInput | SheetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SheetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sheets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sheets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sheets
    **/
    _count?: true | SheetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SheetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SheetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SheetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SheetMaxAggregateInputType
  }

  export type GetSheetAggregateType<T extends SheetAggregateArgs> = {
        [P in keyof T & keyof AggregateSheet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSheet[P]>
      : GetScalarType<T[P], AggregateSheet[P]>
  }




  export type SheetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SheetWhereInput
    orderBy?: SheetOrderByWithAggregationInput | SheetOrderByWithAggregationInput[]
    by: SheetScalarFieldEnum[] | SheetScalarFieldEnum
    having?: SheetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SheetCountAggregateInputType | true
    _avg?: SheetAvgAggregateInputType
    _sum?: SheetSumAggregateInputType
    _min?: SheetMinAggregateInputType
    _max?: SheetMaxAggregateInputType
  }

  export type SheetGroupByOutputType = {
    id: string
    title: string
    company: string
    description: string | null
    userId: string
    price: number
    isPaid: boolean
    createdAt: Date
    updatedAt: Date
    _count: SheetCountAggregateOutputType | null
    _avg: SheetAvgAggregateOutputType | null
    _sum: SheetSumAggregateOutputType | null
    _min: SheetMinAggregateOutputType | null
    _max: SheetMaxAggregateOutputType | null
  }

  type GetSheetGroupByPayload<T extends SheetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SheetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SheetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SheetGroupByOutputType[P]>
            : GetScalarType<T[P], SheetGroupByOutputType[P]>
        }
      >
    >


  export type SheetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    company?: boolean
    description?: boolean
    userId?: boolean
    price?: boolean
    isPaid?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    problems?: boolean | Sheet$problemsArgs<ExtArgs>
    orders?: boolean | Sheet$ordersArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | SheetCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sheet"]>

  export type SheetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    company?: boolean
    description?: boolean
    userId?: boolean
    price?: boolean
    isPaid?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sheet"]>

  export type SheetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    company?: boolean
    description?: boolean
    userId?: boolean
    price?: boolean
    isPaid?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sheet"]>

  export type SheetSelectScalar = {
    id?: boolean
    title?: boolean
    company?: boolean
    description?: boolean
    userId?: boolean
    price?: boolean
    isPaid?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SheetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "company" | "description" | "userId" | "price" | "isPaid" | "createdAt" | "updatedAt", ExtArgs["result"]["sheet"]>
  export type SheetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    problems?: boolean | Sheet$problemsArgs<ExtArgs>
    orders?: boolean | Sheet$ordersArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | SheetCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SheetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SheetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SheetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sheet"
    objects: {
      problems: Prisma.$ProblemInSheetPayload<ExtArgs>[]
      orders: Prisma.$OrderPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      company: string
      description: string | null
      userId: string
      price: number
      isPaid: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["sheet"]>
    composites: {}
  }

  type SheetGetPayload<S extends boolean | null | undefined | SheetDefaultArgs> = $Result.GetResult<Prisma.$SheetPayload, S>

  type SheetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SheetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SheetCountAggregateInputType | true
    }

  export interface SheetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sheet'], meta: { name: 'Sheet' } }
    /**
     * Find zero or one Sheet that matches the filter.
     * @param {SheetFindUniqueArgs} args - Arguments to find a Sheet
     * @example
     * // Get one Sheet
     * const sheet = await prisma.sheet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SheetFindUniqueArgs>(args: SelectSubset<T, SheetFindUniqueArgs<ExtArgs>>): Prisma__SheetClient<$Result.GetResult<Prisma.$SheetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sheet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SheetFindUniqueOrThrowArgs} args - Arguments to find a Sheet
     * @example
     * // Get one Sheet
     * const sheet = await prisma.sheet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SheetFindUniqueOrThrowArgs>(args: SelectSubset<T, SheetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SheetClient<$Result.GetResult<Prisma.$SheetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sheet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SheetFindFirstArgs} args - Arguments to find a Sheet
     * @example
     * // Get one Sheet
     * const sheet = await prisma.sheet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SheetFindFirstArgs>(args?: SelectSubset<T, SheetFindFirstArgs<ExtArgs>>): Prisma__SheetClient<$Result.GetResult<Prisma.$SheetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sheet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SheetFindFirstOrThrowArgs} args - Arguments to find a Sheet
     * @example
     * // Get one Sheet
     * const sheet = await prisma.sheet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SheetFindFirstOrThrowArgs>(args?: SelectSubset<T, SheetFindFirstOrThrowArgs<ExtArgs>>): Prisma__SheetClient<$Result.GetResult<Prisma.$SheetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sheets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SheetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sheets
     * const sheets = await prisma.sheet.findMany()
     * 
     * // Get first 10 Sheets
     * const sheets = await prisma.sheet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sheetWithIdOnly = await prisma.sheet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SheetFindManyArgs>(args?: SelectSubset<T, SheetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SheetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sheet.
     * @param {SheetCreateArgs} args - Arguments to create a Sheet.
     * @example
     * // Create one Sheet
     * const Sheet = await prisma.sheet.create({
     *   data: {
     *     // ... data to create a Sheet
     *   }
     * })
     * 
     */
    create<T extends SheetCreateArgs>(args: SelectSubset<T, SheetCreateArgs<ExtArgs>>): Prisma__SheetClient<$Result.GetResult<Prisma.$SheetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sheets.
     * @param {SheetCreateManyArgs} args - Arguments to create many Sheets.
     * @example
     * // Create many Sheets
     * const sheet = await prisma.sheet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SheetCreateManyArgs>(args?: SelectSubset<T, SheetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sheets and returns the data saved in the database.
     * @param {SheetCreateManyAndReturnArgs} args - Arguments to create many Sheets.
     * @example
     * // Create many Sheets
     * const sheet = await prisma.sheet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sheets and only return the `id`
     * const sheetWithIdOnly = await prisma.sheet.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SheetCreateManyAndReturnArgs>(args?: SelectSubset<T, SheetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SheetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sheet.
     * @param {SheetDeleteArgs} args - Arguments to delete one Sheet.
     * @example
     * // Delete one Sheet
     * const Sheet = await prisma.sheet.delete({
     *   where: {
     *     // ... filter to delete one Sheet
     *   }
     * })
     * 
     */
    delete<T extends SheetDeleteArgs>(args: SelectSubset<T, SheetDeleteArgs<ExtArgs>>): Prisma__SheetClient<$Result.GetResult<Prisma.$SheetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sheet.
     * @param {SheetUpdateArgs} args - Arguments to update one Sheet.
     * @example
     * // Update one Sheet
     * const sheet = await prisma.sheet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SheetUpdateArgs>(args: SelectSubset<T, SheetUpdateArgs<ExtArgs>>): Prisma__SheetClient<$Result.GetResult<Prisma.$SheetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sheets.
     * @param {SheetDeleteManyArgs} args - Arguments to filter Sheets to delete.
     * @example
     * // Delete a few Sheets
     * const { count } = await prisma.sheet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SheetDeleteManyArgs>(args?: SelectSubset<T, SheetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sheets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SheetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sheets
     * const sheet = await prisma.sheet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SheetUpdateManyArgs>(args: SelectSubset<T, SheetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sheets and returns the data updated in the database.
     * @param {SheetUpdateManyAndReturnArgs} args - Arguments to update many Sheets.
     * @example
     * // Update many Sheets
     * const sheet = await prisma.sheet.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sheets and only return the `id`
     * const sheetWithIdOnly = await prisma.sheet.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SheetUpdateManyAndReturnArgs>(args: SelectSubset<T, SheetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SheetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sheet.
     * @param {SheetUpsertArgs} args - Arguments to update or create a Sheet.
     * @example
     * // Update or create a Sheet
     * const sheet = await prisma.sheet.upsert({
     *   create: {
     *     // ... data to create a Sheet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sheet we want to update
     *   }
     * })
     */
    upsert<T extends SheetUpsertArgs>(args: SelectSubset<T, SheetUpsertArgs<ExtArgs>>): Prisma__SheetClient<$Result.GetResult<Prisma.$SheetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sheets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SheetCountArgs} args - Arguments to filter Sheets to count.
     * @example
     * // Count the number of Sheets
     * const count = await prisma.sheet.count({
     *   where: {
     *     // ... the filter for the Sheets we want to count
     *   }
     * })
    **/
    count<T extends SheetCountArgs>(
      args?: Subset<T, SheetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SheetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sheet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SheetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SheetAggregateArgs>(args: Subset<T, SheetAggregateArgs>): Prisma.PrismaPromise<GetSheetAggregateType<T>>

    /**
     * Group by Sheet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SheetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SheetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SheetGroupByArgs['orderBy'] }
        : { orderBy?: SheetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SheetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSheetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sheet model
   */
  readonly fields: SheetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sheet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SheetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    problems<T extends Sheet$problemsArgs<ExtArgs> = {}>(args?: Subset<T, Sheet$problemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemInSheetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orders<T extends Sheet$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Sheet$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Sheet model
   */
  interface SheetFieldRefs {
    readonly id: FieldRef<"Sheet", 'String'>
    readonly title: FieldRef<"Sheet", 'String'>
    readonly company: FieldRef<"Sheet", 'String'>
    readonly description: FieldRef<"Sheet", 'String'>
    readonly userId: FieldRef<"Sheet", 'String'>
    readonly price: FieldRef<"Sheet", 'Int'>
    readonly isPaid: FieldRef<"Sheet", 'Boolean'>
    readonly createdAt: FieldRef<"Sheet", 'DateTime'>
    readonly updatedAt: FieldRef<"Sheet", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Sheet findUnique
   */
  export type SheetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sheet
     */
    select?: SheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sheet
     */
    omit?: SheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SheetInclude<ExtArgs> | null
    /**
     * Filter, which Sheet to fetch.
     */
    where: SheetWhereUniqueInput
  }

  /**
   * Sheet findUniqueOrThrow
   */
  export type SheetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sheet
     */
    select?: SheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sheet
     */
    omit?: SheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SheetInclude<ExtArgs> | null
    /**
     * Filter, which Sheet to fetch.
     */
    where: SheetWhereUniqueInput
  }

  /**
   * Sheet findFirst
   */
  export type SheetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sheet
     */
    select?: SheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sheet
     */
    omit?: SheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SheetInclude<ExtArgs> | null
    /**
     * Filter, which Sheet to fetch.
     */
    where?: SheetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sheets to fetch.
     */
    orderBy?: SheetOrderByWithRelationInput | SheetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sheets.
     */
    cursor?: SheetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sheets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sheets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sheets.
     */
    distinct?: SheetScalarFieldEnum | SheetScalarFieldEnum[]
  }

  /**
   * Sheet findFirstOrThrow
   */
  export type SheetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sheet
     */
    select?: SheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sheet
     */
    omit?: SheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SheetInclude<ExtArgs> | null
    /**
     * Filter, which Sheet to fetch.
     */
    where?: SheetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sheets to fetch.
     */
    orderBy?: SheetOrderByWithRelationInput | SheetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sheets.
     */
    cursor?: SheetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sheets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sheets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sheets.
     */
    distinct?: SheetScalarFieldEnum | SheetScalarFieldEnum[]
  }

  /**
   * Sheet findMany
   */
  export type SheetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sheet
     */
    select?: SheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sheet
     */
    omit?: SheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SheetInclude<ExtArgs> | null
    /**
     * Filter, which Sheets to fetch.
     */
    where?: SheetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sheets to fetch.
     */
    orderBy?: SheetOrderByWithRelationInput | SheetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sheets.
     */
    cursor?: SheetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sheets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sheets.
     */
    skip?: number
    distinct?: SheetScalarFieldEnum | SheetScalarFieldEnum[]
  }

  /**
   * Sheet create
   */
  export type SheetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sheet
     */
    select?: SheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sheet
     */
    omit?: SheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SheetInclude<ExtArgs> | null
    /**
     * The data needed to create a Sheet.
     */
    data: XOR<SheetCreateInput, SheetUncheckedCreateInput>
  }

  /**
   * Sheet createMany
   */
  export type SheetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sheets.
     */
    data: SheetCreateManyInput | SheetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sheet createManyAndReturn
   */
  export type SheetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sheet
     */
    select?: SheetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sheet
     */
    omit?: SheetOmit<ExtArgs> | null
    /**
     * The data used to create many Sheets.
     */
    data: SheetCreateManyInput | SheetCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SheetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sheet update
   */
  export type SheetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sheet
     */
    select?: SheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sheet
     */
    omit?: SheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SheetInclude<ExtArgs> | null
    /**
     * The data needed to update a Sheet.
     */
    data: XOR<SheetUpdateInput, SheetUncheckedUpdateInput>
    /**
     * Choose, which Sheet to update.
     */
    where: SheetWhereUniqueInput
  }

  /**
   * Sheet updateMany
   */
  export type SheetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sheets.
     */
    data: XOR<SheetUpdateManyMutationInput, SheetUncheckedUpdateManyInput>
    /**
     * Filter which Sheets to update
     */
    where?: SheetWhereInput
    /**
     * Limit how many Sheets to update.
     */
    limit?: number
  }

  /**
   * Sheet updateManyAndReturn
   */
  export type SheetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sheet
     */
    select?: SheetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sheet
     */
    omit?: SheetOmit<ExtArgs> | null
    /**
     * The data used to update Sheets.
     */
    data: XOR<SheetUpdateManyMutationInput, SheetUncheckedUpdateManyInput>
    /**
     * Filter which Sheets to update
     */
    where?: SheetWhereInput
    /**
     * Limit how many Sheets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SheetIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sheet upsert
   */
  export type SheetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sheet
     */
    select?: SheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sheet
     */
    omit?: SheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SheetInclude<ExtArgs> | null
    /**
     * The filter to search for the Sheet to update in case it exists.
     */
    where: SheetWhereUniqueInput
    /**
     * In case the Sheet found by the `where` argument doesn't exist, create a new Sheet with this data.
     */
    create: XOR<SheetCreateInput, SheetUncheckedCreateInput>
    /**
     * In case the Sheet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SheetUpdateInput, SheetUncheckedUpdateInput>
  }

  /**
   * Sheet delete
   */
  export type SheetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sheet
     */
    select?: SheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sheet
     */
    omit?: SheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SheetInclude<ExtArgs> | null
    /**
     * Filter which Sheet to delete.
     */
    where: SheetWhereUniqueInput
  }

  /**
   * Sheet deleteMany
   */
  export type SheetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sheets to delete
     */
    where?: SheetWhereInput
    /**
     * Limit how many Sheets to delete.
     */
    limit?: number
  }

  /**
   * Sheet.problems
   */
  export type Sheet$problemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemInSheet
     */
    select?: ProblemInSheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemInSheet
     */
    omit?: ProblemInSheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInSheetInclude<ExtArgs> | null
    where?: ProblemInSheetWhereInput
    orderBy?: ProblemInSheetOrderByWithRelationInput | ProblemInSheetOrderByWithRelationInput[]
    cursor?: ProblemInSheetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProblemInSheetScalarFieldEnum | ProblemInSheetScalarFieldEnum[]
  }

  /**
   * Sheet.orders
   */
  export type Sheet$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Sheet without action
   */
  export type SheetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sheet
     */
    select?: SheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sheet
     */
    omit?: SheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SheetInclude<ExtArgs> | null
  }


  /**
   * Model ProblemInSheet
   */

  export type AggregateProblemInSheet = {
    _count: ProblemInSheetCountAggregateOutputType | null
    _min: ProblemInSheetMinAggregateOutputType | null
    _max: ProblemInSheetMaxAggregateOutputType | null
  }

  export type ProblemInSheetMinAggregateOutputType = {
    id: string | null
    problemId: string | null
    sheetId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProblemInSheetMaxAggregateOutputType = {
    id: string | null
    problemId: string | null
    sheetId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProblemInSheetCountAggregateOutputType = {
    id: number
    problemId: number
    sheetId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProblemInSheetMinAggregateInputType = {
    id?: true
    problemId?: true
    sheetId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProblemInSheetMaxAggregateInputType = {
    id?: true
    problemId?: true
    sheetId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProblemInSheetCountAggregateInputType = {
    id?: true
    problemId?: true
    sheetId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProblemInSheetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProblemInSheet to aggregate.
     */
    where?: ProblemInSheetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProblemInSheets to fetch.
     */
    orderBy?: ProblemInSheetOrderByWithRelationInput | ProblemInSheetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProblemInSheetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProblemInSheets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProblemInSheets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProblemInSheets
    **/
    _count?: true | ProblemInSheetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProblemInSheetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProblemInSheetMaxAggregateInputType
  }

  export type GetProblemInSheetAggregateType<T extends ProblemInSheetAggregateArgs> = {
        [P in keyof T & keyof AggregateProblemInSheet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProblemInSheet[P]>
      : GetScalarType<T[P], AggregateProblemInSheet[P]>
  }




  export type ProblemInSheetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProblemInSheetWhereInput
    orderBy?: ProblemInSheetOrderByWithAggregationInput | ProblemInSheetOrderByWithAggregationInput[]
    by: ProblemInSheetScalarFieldEnum[] | ProblemInSheetScalarFieldEnum
    having?: ProblemInSheetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProblemInSheetCountAggregateInputType | true
    _min?: ProblemInSheetMinAggregateInputType
    _max?: ProblemInSheetMaxAggregateInputType
  }

  export type ProblemInSheetGroupByOutputType = {
    id: string
    problemId: string
    sheetId: string
    createdAt: Date
    updatedAt: Date
    _count: ProblemInSheetCountAggregateOutputType | null
    _min: ProblemInSheetMinAggregateOutputType | null
    _max: ProblemInSheetMaxAggregateOutputType | null
  }

  type GetProblemInSheetGroupByPayload<T extends ProblemInSheetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProblemInSheetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProblemInSheetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProblemInSheetGroupByOutputType[P]>
            : GetScalarType<T[P], ProblemInSheetGroupByOutputType[P]>
        }
      >
    >


  export type ProblemInSheetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    problemId?: boolean
    sheetId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sheet?: boolean | SheetDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["problemInSheet"]>

  export type ProblemInSheetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    problemId?: boolean
    sheetId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sheet?: boolean | SheetDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["problemInSheet"]>

  export type ProblemInSheetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    problemId?: boolean
    sheetId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sheet?: boolean | SheetDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["problemInSheet"]>

  export type ProblemInSheetSelectScalar = {
    id?: boolean
    problemId?: boolean
    sheetId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProblemInSheetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "problemId" | "sheetId" | "createdAt" | "updatedAt", ExtArgs["result"]["problemInSheet"]>
  export type ProblemInSheetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sheet?: boolean | SheetDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }
  export type ProblemInSheetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sheet?: boolean | SheetDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }
  export type ProblemInSheetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sheet?: boolean | SheetDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }

  export type $ProblemInSheetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProblemInSheet"
    objects: {
      sheet: Prisma.$SheetPayload<ExtArgs>
      problem: Prisma.$ProblemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      problemId: string
      sheetId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["problemInSheet"]>
    composites: {}
  }

  type ProblemInSheetGetPayload<S extends boolean | null | undefined | ProblemInSheetDefaultArgs> = $Result.GetResult<Prisma.$ProblemInSheetPayload, S>

  type ProblemInSheetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProblemInSheetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProblemInSheetCountAggregateInputType | true
    }

  export interface ProblemInSheetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProblemInSheet'], meta: { name: 'ProblemInSheet' } }
    /**
     * Find zero or one ProblemInSheet that matches the filter.
     * @param {ProblemInSheetFindUniqueArgs} args - Arguments to find a ProblemInSheet
     * @example
     * // Get one ProblemInSheet
     * const problemInSheet = await prisma.problemInSheet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProblemInSheetFindUniqueArgs>(args: SelectSubset<T, ProblemInSheetFindUniqueArgs<ExtArgs>>): Prisma__ProblemInSheetClient<$Result.GetResult<Prisma.$ProblemInSheetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProblemInSheet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProblemInSheetFindUniqueOrThrowArgs} args - Arguments to find a ProblemInSheet
     * @example
     * // Get one ProblemInSheet
     * const problemInSheet = await prisma.problemInSheet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProblemInSheetFindUniqueOrThrowArgs>(args: SelectSubset<T, ProblemInSheetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProblemInSheetClient<$Result.GetResult<Prisma.$ProblemInSheetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProblemInSheet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemInSheetFindFirstArgs} args - Arguments to find a ProblemInSheet
     * @example
     * // Get one ProblemInSheet
     * const problemInSheet = await prisma.problemInSheet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProblemInSheetFindFirstArgs>(args?: SelectSubset<T, ProblemInSheetFindFirstArgs<ExtArgs>>): Prisma__ProblemInSheetClient<$Result.GetResult<Prisma.$ProblemInSheetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProblemInSheet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemInSheetFindFirstOrThrowArgs} args - Arguments to find a ProblemInSheet
     * @example
     * // Get one ProblemInSheet
     * const problemInSheet = await prisma.problemInSheet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProblemInSheetFindFirstOrThrowArgs>(args?: SelectSubset<T, ProblemInSheetFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProblemInSheetClient<$Result.GetResult<Prisma.$ProblemInSheetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProblemInSheets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemInSheetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProblemInSheets
     * const problemInSheets = await prisma.problemInSheet.findMany()
     * 
     * // Get first 10 ProblemInSheets
     * const problemInSheets = await prisma.problemInSheet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const problemInSheetWithIdOnly = await prisma.problemInSheet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProblemInSheetFindManyArgs>(args?: SelectSubset<T, ProblemInSheetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemInSheetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProblemInSheet.
     * @param {ProblemInSheetCreateArgs} args - Arguments to create a ProblemInSheet.
     * @example
     * // Create one ProblemInSheet
     * const ProblemInSheet = await prisma.problemInSheet.create({
     *   data: {
     *     // ... data to create a ProblemInSheet
     *   }
     * })
     * 
     */
    create<T extends ProblemInSheetCreateArgs>(args: SelectSubset<T, ProblemInSheetCreateArgs<ExtArgs>>): Prisma__ProblemInSheetClient<$Result.GetResult<Prisma.$ProblemInSheetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProblemInSheets.
     * @param {ProblemInSheetCreateManyArgs} args - Arguments to create many ProblemInSheets.
     * @example
     * // Create many ProblemInSheets
     * const problemInSheet = await prisma.problemInSheet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProblemInSheetCreateManyArgs>(args?: SelectSubset<T, ProblemInSheetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProblemInSheets and returns the data saved in the database.
     * @param {ProblemInSheetCreateManyAndReturnArgs} args - Arguments to create many ProblemInSheets.
     * @example
     * // Create many ProblemInSheets
     * const problemInSheet = await prisma.problemInSheet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProblemInSheets and only return the `id`
     * const problemInSheetWithIdOnly = await prisma.problemInSheet.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProblemInSheetCreateManyAndReturnArgs>(args?: SelectSubset<T, ProblemInSheetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemInSheetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProblemInSheet.
     * @param {ProblemInSheetDeleteArgs} args - Arguments to delete one ProblemInSheet.
     * @example
     * // Delete one ProblemInSheet
     * const ProblemInSheet = await prisma.problemInSheet.delete({
     *   where: {
     *     // ... filter to delete one ProblemInSheet
     *   }
     * })
     * 
     */
    delete<T extends ProblemInSheetDeleteArgs>(args: SelectSubset<T, ProblemInSheetDeleteArgs<ExtArgs>>): Prisma__ProblemInSheetClient<$Result.GetResult<Prisma.$ProblemInSheetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProblemInSheet.
     * @param {ProblemInSheetUpdateArgs} args - Arguments to update one ProblemInSheet.
     * @example
     * // Update one ProblemInSheet
     * const problemInSheet = await prisma.problemInSheet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProblemInSheetUpdateArgs>(args: SelectSubset<T, ProblemInSheetUpdateArgs<ExtArgs>>): Prisma__ProblemInSheetClient<$Result.GetResult<Prisma.$ProblemInSheetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProblemInSheets.
     * @param {ProblemInSheetDeleteManyArgs} args - Arguments to filter ProblemInSheets to delete.
     * @example
     * // Delete a few ProblemInSheets
     * const { count } = await prisma.problemInSheet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProblemInSheetDeleteManyArgs>(args?: SelectSubset<T, ProblemInSheetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProblemInSheets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemInSheetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProblemInSheets
     * const problemInSheet = await prisma.problemInSheet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProblemInSheetUpdateManyArgs>(args: SelectSubset<T, ProblemInSheetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProblemInSheets and returns the data updated in the database.
     * @param {ProblemInSheetUpdateManyAndReturnArgs} args - Arguments to update many ProblemInSheets.
     * @example
     * // Update many ProblemInSheets
     * const problemInSheet = await prisma.problemInSheet.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProblemInSheets and only return the `id`
     * const problemInSheetWithIdOnly = await prisma.problemInSheet.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProblemInSheetUpdateManyAndReturnArgs>(args: SelectSubset<T, ProblemInSheetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemInSheetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProblemInSheet.
     * @param {ProblemInSheetUpsertArgs} args - Arguments to update or create a ProblemInSheet.
     * @example
     * // Update or create a ProblemInSheet
     * const problemInSheet = await prisma.problemInSheet.upsert({
     *   create: {
     *     // ... data to create a ProblemInSheet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProblemInSheet we want to update
     *   }
     * })
     */
    upsert<T extends ProblemInSheetUpsertArgs>(args: SelectSubset<T, ProblemInSheetUpsertArgs<ExtArgs>>): Prisma__ProblemInSheetClient<$Result.GetResult<Prisma.$ProblemInSheetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProblemInSheets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemInSheetCountArgs} args - Arguments to filter ProblemInSheets to count.
     * @example
     * // Count the number of ProblemInSheets
     * const count = await prisma.problemInSheet.count({
     *   where: {
     *     // ... the filter for the ProblemInSheets we want to count
     *   }
     * })
    **/
    count<T extends ProblemInSheetCountArgs>(
      args?: Subset<T, ProblemInSheetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProblemInSheetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProblemInSheet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemInSheetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProblemInSheetAggregateArgs>(args: Subset<T, ProblemInSheetAggregateArgs>): Prisma.PrismaPromise<GetProblemInSheetAggregateType<T>>

    /**
     * Group by ProblemInSheet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemInSheetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProblemInSheetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProblemInSheetGroupByArgs['orderBy'] }
        : { orderBy?: ProblemInSheetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProblemInSheetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProblemInSheetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProblemInSheet model
   */
  readonly fields: ProblemInSheetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProblemInSheet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProblemInSheetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sheet<T extends SheetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SheetDefaultArgs<ExtArgs>>): Prisma__SheetClient<$Result.GetResult<Prisma.$SheetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    problem<T extends ProblemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProblemDefaultArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProblemInSheet model
   */
  interface ProblemInSheetFieldRefs {
    readonly id: FieldRef<"ProblemInSheet", 'String'>
    readonly problemId: FieldRef<"ProblemInSheet", 'String'>
    readonly sheetId: FieldRef<"ProblemInSheet", 'String'>
    readonly createdAt: FieldRef<"ProblemInSheet", 'DateTime'>
    readonly updatedAt: FieldRef<"ProblemInSheet", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProblemInSheet findUnique
   */
  export type ProblemInSheetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemInSheet
     */
    select?: ProblemInSheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemInSheet
     */
    omit?: ProblemInSheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInSheetInclude<ExtArgs> | null
    /**
     * Filter, which ProblemInSheet to fetch.
     */
    where: ProblemInSheetWhereUniqueInput
  }

  /**
   * ProblemInSheet findUniqueOrThrow
   */
  export type ProblemInSheetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemInSheet
     */
    select?: ProblemInSheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemInSheet
     */
    omit?: ProblemInSheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInSheetInclude<ExtArgs> | null
    /**
     * Filter, which ProblemInSheet to fetch.
     */
    where: ProblemInSheetWhereUniqueInput
  }

  /**
   * ProblemInSheet findFirst
   */
  export type ProblemInSheetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemInSheet
     */
    select?: ProblemInSheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemInSheet
     */
    omit?: ProblemInSheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInSheetInclude<ExtArgs> | null
    /**
     * Filter, which ProblemInSheet to fetch.
     */
    where?: ProblemInSheetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProblemInSheets to fetch.
     */
    orderBy?: ProblemInSheetOrderByWithRelationInput | ProblemInSheetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProblemInSheets.
     */
    cursor?: ProblemInSheetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProblemInSheets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProblemInSheets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProblemInSheets.
     */
    distinct?: ProblemInSheetScalarFieldEnum | ProblemInSheetScalarFieldEnum[]
  }

  /**
   * ProblemInSheet findFirstOrThrow
   */
  export type ProblemInSheetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemInSheet
     */
    select?: ProblemInSheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemInSheet
     */
    omit?: ProblemInSheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInSheetInclude<ExtArgs> | null
    /**
     * Filter, which ProblemInSheet to fetch.
     */
    where?: ProblemInSheetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProblemInSheets to fetch.
     */
    orderBy?: ProblemInSheetOrderByWithRelationInput | ProblemInSheetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProblemInSheets.
     */
    cursor?: ProblemInSheetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProblemInSheets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProblemInSheets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProblemInSheets.
     */
    distinct?: ProblemInSheetScalarFieldEnum | ProblemInSheetScalarFieldEnum[]
  }

  /**
   * ProblemInSheet findMany
   */
  export type ProblemInSheetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemInSheet
     */
    select?: ProblemInSheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemInSheet
     */
    omit?: ProblemInSheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInSheetInclude<ExtArgs> | null
    /**
     * Filter, which ProblemInSheets to fetch.
     */
    where?: ProblemInSheetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProblemInSheets to fetch.
     */
    orderBy?: ProblemInSheetOrderByWithRelationInput | ProblemInSheetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProblemInSheets.
     */
    cursor?: ProblemInSheetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProblemInSheets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProblemInSheets.
     */
    skip?: number
    distinct?: ProblemInSheetScalarFieldEnum | ProblemInSheetScalarFieldEnum[]
  }

  /**
   * ProblemInSheet create
   */
  export type ProblemInSheetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemInSheet
     */
    select?: ProblemInSheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemInSheet
     */
    omit?: ProblemInSheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInSheetInclude<ExtArgs> | null
    /**
     * The data needed to create a ProblemInSheet.
     */
    data: XOR<ProblemInSheetCreateInput, ProblemInSheetUncheckedCreateInput>
  }

  /**
   * ProblemInSheet createMany
   */
  export type ProblemInSheetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProblemInSheets.
     */
    data: ProblemInSheetCreateManyInput | ProblemInSheetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProblemInSheet createManyAndReturn
   */
  export type ProblemInSheetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemInSheet
     */
    select?: ProblemInSheetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemInSheet
     */
    omit?: ProblemInSheetOmit<ExtArgs> | null
    /**
     * The data used to create many ProblemInSheets.
     */
    data: ProblemInSheetCreateManyInput | ProblemInSheetCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInSheetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProblemInSheet update
   */
  export type ProblemInSheetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemInSheet
     */
    select?: ProblemInSheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemInSheet
     */
    omit?: ProblemInSheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInSheetInclude<ExtArgs> | null
    /**
     * The data needed to update a ProblemInSheet.
     */
    data: XOR<ProblemInSheetUpdateInput, ProblemInSheetUncheckedUpdateInput>
    /**
     * Choose, which ProblemInSheet to update.
     */
    where: ProblemInSheetWhereUniqueInput
  }

  /**
   * ProblemInSheet updateMany
   */
  export type ProblemInSheetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProblemInSheets.
     */
    data: XOR<ProblemInSheetUpdateManyMutationInput, ProblemInSheetUncheckedUpdateManyInput>
    /**
     * Filter which ProblemInSheets to update
     */
    where?: ProblemInSheetWhereInput
    /**
     * Limit how many ProblemInSheets to update.
     */
    limit?: number
  }

  /**
   * ProblemInSheet updateManyAndReturn
   */
  export type ProblemInSheetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemInSheet
     */
    select?: ProblemInSheetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemInSheet
     */
    omit?: ProblemInSheetOmit<ExtArgs> | null
    /**
     * The data used to update ProblemInSheets.
     */
    data: XOR<ProblemInSheetUpdateManyMutationInput, ProblemInSheetUncheckedUpdateManyInput>
    /**
     * Filter which ProblemInSheets to update
     */
    where?: ProblemInSheetWhereInput
    /**
     * Limit how many ProblemInSheets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInSheetIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProblemInSheet upsert
   */
  export type ProblemInSheetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemInSheet
     */
    select?: ProblemInSheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemInSheet
     */
    omit?: ProblemInSheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInSheetInclude<ExtArgs> | null
    /**
     * The filter to search for the ProblemInSheet to update in case it exists.
     */
    where: ProblemInSheetWhereUniqueInput
    /**
     * In case the ProblemInSheet found by the `where` argument doesn't exist, create a new ProblemInSheet with this data.
     */
    create: XOR<ProblemInSheetCreateInput, ProblemInSheetUncheckedCreateInput>
    /**
     * In case the ProblemInSheet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProblemInSheetUpdateInput, ProblemInSheetUncheckedUpdateInput>
  }

  /**
   * ProblemInSheet delete
   */
  export type ProblemInSheetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemInSheet
     */
    select?: ProblemInSheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemInSheet
     */
    omit?: ProblemInSheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInSheetInclude<ExtArgs> | null
    /**
     * Filter which ProblemInSheet to delete.
     */
    where: ProblemInSheetWhereUniqueInput
  }

  /**
   * ProblemInSheet deleteMany
   */
  export type ProblemInSheetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProblemInSheets to delete
     */
    where?: ProblemInSheetWhereInput
    /**
     * Limit how many ProblemInSheets to delete.
     */
    limit?: number
  }

  /**
   * ProblemInSheet without action
   */
  export type ProblemInSheetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemInSheet
     */
    select?: ProblemInSheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProblemInSheet
     */
    omit?: ProblemInSheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInSheetInclude<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    amount: number | null
  }

  export type OrderSumAggregateOutputType = {
    amount: number | null
  }

  export type OrderMinAggregateOutputType = {
    id: string | null
    userId: string | null
    sheetId: string | null
    razorpayOrderId: string | null
    razorpayPaymentId: string | null
    razorpaySignature: string | null
    status: string | null
    amount: number | null
    createdAt: Date | null
  }

  export type OrderMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    sheetId: string | null
    razorpayOrderId: string | null
    razorpayPaymentId: string | null
    razorpaySignature: string | null
    status: string | null
    amount: number | null
    createdAt: Date | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    userId: number
    sheetId: number
    razorpayOrderId: number
    razorpayPaymentId: number
    razorpaySignature: number
    status: number
    amount: number
    createdAt: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    amount?: true
  }

  export type OrderSumAggregateInputType = {
    amount?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    userId?: true
    sheetId?: true
    razorpayOrderId?: true
    razorpayPaymentId?: true
    razorpaySignature?: true
    status?: true
    amount?: true
    createdAt?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    userId?: true
    sheetId?: true
    razorpayOrderId?: true
    razorpayPaymentId?: true
    razorpaySignature?: true
    status?: true
    amount?: true
    createdAt?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    userId?: true
    sheetId?: true
    razorpayOrderId?: true
    razorpayPaymentId?: true
    razorpaySignature?: true
    status?: true
    amount?: true
    createdAt?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: string
    userId: string
    sheetId: string
    razorpayOrderId: string
    razorpayPaymentId: string | null
    razorpaySignature: string | null
    status: string
    amount: number
    createdAt: Date
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    sheetId?: boolean
    razorpayOrderId?: boolean
    razorpayPaymentId?: boolean
    razorpaySignature?: boolean
    status?: boolean
    amount?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    sheet?: boolean | SheetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    sheetId?: boolean
    razorpayOrderId?: boolean
    razorpayPaymentId?: boolean
    razorpaySignature?: boolean
    status?: boolean
    amount?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    sheet?: boolean | SheetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    sheetId?: boolean
    razorpayOrderId?: boolean
    razorpayPaymentId?: boolean
    razorpaySignature?: boolean
    status?: boolean
    amount?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    sheet?: boolean | SheetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    id?: boolean
    userId?: boolean
    sheetId?: boolean
    razorpayOrderId?: boolean
    razorpayPaymentId?: boolean
    razorpaySignature?: boolean
    status?: boolean
    amount?: boolean
    createdAt?: boolean
  }

  export type OrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "sheetId" | "razorpayOrderId" | "razorpayPaymentId" | "razorpaySignature" | "status" | "amount" | "createdAt", ExtArgs["result"]["order"]>
  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    sheet?: boolean | SheetDefaultArgs<ExtArgs>
  }
  export type OrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    sheet?: boolean | SheetDefaultArgs<ExtArgs>
  }
  export type OrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    sheet?: boolean | SheetDefaultArgs<ExtArgs>
  }

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      sheet: Prisma.$SheetPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      sheetId: string
      razorpayOrderId: string
      razorpayPaymentId: string | null
      razorpaySignature: string | null
      status: string
      amount: number
      createdAt: Date
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrderCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {OrderUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrderUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sheet<T extends SheetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SheetDefaultArgs<ExtArgs>>): Prisma__SheetClient<$Result.GetResult<Prisma.$SheetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Order model
   */
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'String'>
    readonly userId: FieldRef<"Order", 'String'>
    readonly sheetId: FieldRef<"Order", 'String'>
    readonly razorpayOrderId: FieldRef<"Order", 'String'>
    readonly razorpayPaymentId: FieldRef<"Order", 'String'>
    readonly razorpaySignature: FieldRef<"Order", 'String'>
    readonly status: FieldRef<"Order", 'String'>
    readonly amount: FieldRef<"Order", 'Int'>
    readonly createdAt: FieldRef<"Order", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order createManyAndReturn
   */
  export type OrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Order updateManyAndReturn
   */
  export type OrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    image: 'image',
    role: 'role',
    password: 'password',
    refreshToken: 'refreshToken',
    forgotPasswordToken: 'forgotPasswordToken',
    forgotPasswordExpiry: 'forgotPasswordExpiry',
    isEmailVerified: 'isEmailVerified',
    emailVerificationToken: 'emailVerificationToken',
    emailVerificationExpiry: 'emailVerificationExpiry',
    googleId: 'googleId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProblemScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    difficulty: 'difficulty',
    tags: 'tags',
    userId: 'userId',
    examples: 'examples',
    constraints: 'constraints',
    hints: 'hints',
    editorial: 'editorial',
    testcases: 'testcases',
    codeSnippets: 'codeSnippets',
    referenceSolutions: 'referenceSolutions',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProblemScalarFieldEnum = (typeof ProblemScalarFieldEnum)[keyof typeof ProblemScalarFieldEnum]


  export const SubmissionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    problemId: 'problemId',
    sourceCode: 'sourceCode',
    language: 'language',
    stdin: 'stdin',
    stdout: 'stdout',
    stderr: 'stderr',
    compileOutput: 'compileOutput',
    status: 'status',
    memory: 'memory',
    time: 'time',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SubmissionScalarFieldEnum = (typeof SubmissionScalarFieldEnum)[keyof typeof SubmissionScalarFieldEnum]


  export const TestCaseResultScalarFieldEnum: {
    id: 'id',
    submissionId: 'submissionId',
    testCase: 'testCase',
    passed: 'passed',
    stdout: 'stdout',
    expected: 'expected',
    stderr: 'stderr',
    compileOutput: 'compileOutput',
    status: 'status',
    memory: 'memory',
    time: 'time',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TestCaseResultScalarFieldEnum = (typeof TestCaseResultScalarFieldEnum)[keyof typeof TestCaseResultScalarFieldEnum]


  export const ProblemSolvedScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    problemId: 'problemId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProblemSolvedScalarFieldEnum = (typeof ProblemSolvedScalarFieldEnum)[keyof typeof ProblemSolvedScalarFieldEnum]


  export const PlaylistScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PlaylistScalarFieldEnum = (typeof PlaylistScalarFieldEnum)[keyof typeof PlaylistScalarFieldEnum]


  export const ProblemInPlaylistScalarFieldEnum: {
    id: 'id',
    problemId: 'problemId',
    playlistId: 'playlistId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProblemInPlaylistScalarFieldEnum = (typeof ProblemInPlaylistScalarFieldEnum)[keyof typeof ProblemInPlaylistScalarFieldEnum]


  export const SheetScalarFieldEnum: {
    id: 'id',
    title: 'title',
    company: 'company',
    description: 'description',
    userId: 'userId',
    price: 'price',
    isPaid: 'isPaid',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SheetScalarFieldEnum = (typeof SheetScalarFieldEnum)[keyof typeof SheetScalarFieldEnum]


  export const ProblemInSheetScalarFieldEnum: {
    id: 'id',
    problemId: 'problemId',
    sheetId: 'sheetId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProblemInSheetScalarFieldEnum = (typeof ProblemInSheetScalarFieldEnum)[keyof typeof ProblemInSheetScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    sheetId: 'sheetId',
    razorpayOrderId: 'razorpayOrderId',
    razorpayPaymentId: 'razorpayPaymentId',
    razorpaySignature: 'razorpaySignature',
    status: 'status',
    amount: 'amount',
    createdAt: 'createdAt'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Difficulty'
   */
  export type EnumDifficultyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Difficulty'>
    


  /**
   * Reference to a field of type 'Difficulty[]'
   */
  export type ListEnumDifficultyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Difficulty[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    image?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    password?: StringNullableFilter<"User"> | string | null
    refreshToken?: StringNullableFilter<"User"> | string | null
    forgotPasswordToken?: StringNullableFilter<"User"> | string | null
    forgotPasswordExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    isEmailVerified?: BoolFilter<"User"> | boolean
    emailVerificationToken?: StringNullableFilter<"User"> | string | null
    emailVerificationExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    googleId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    prblems?: ProblemListRelationFilter
    submissions?: SubmissionListRelationFilter
    problemSolved?: ProblemSolvedListRelationFilter
    playlists?: PlaylistListRelationFilter
    sheet?: SheetListRelationFilter
    orders?: OrderListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    image?: SortOrderInput | SortOrder
    role?: SortOrder
    password?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    forgotPasswordToken?: SortOrderInput | SortOrder
    forgotPasswordExpiry?: SortOrderInput | SortOrder
    isEmailVerified?: SortOrder
    emailVerificationToken?: SortOrderInput | SortOrder
    emailVerificationExpiry?: SortOrderInput | SortOrder
    googleId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    prblems?: ProblemOrderByRelationAggregateInput
    submissions?: SubmissionOrderByRelationAggregateInput
    problemSolved?: ProblemSolvedOrderByRelationAggregateInput
    playlists?: PlaylistOrderByRelationAggregateInput
    sheet?: SheetOrderByRelationAggregateInput
    orders?: OrderOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    googleId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    password?: StringNullableFilter<"User"> | string | null
    refreshToken?: StringNullableFilter<"User"> | string | null
    forgotPasswordToken?: StringNullableFilter<"User"> | string | null
    forgotPasswordExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    isEmailVerified?: BoolFilter<"User"> | boolean
    emailVerificationToken?: StringNullableFilter<"User"> | string | null
    emailVerificationExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    prblems?: ProblemListRelationFilter
    submissions?: SubmissionListRelationFilter
    problemSolved?: ProblemSolvedListRelationFilter
    playlists?: PlaylistListRelationFilter
    sheet?: SheetListRelationFilter
    orders?: OrderListRelationFilter
  }, "id" | "email" | "googleId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    image?: SortOrderInput | SortOrder
    role?: SortOrder
    password?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    forgotPasswordToken?: SortOrderInput | SortOrder
    forgotPasswordExpiry?: SortOrderInput | SortOrder
    isEmailVerified?: SortOrder
    emailVerificationToken?: SortOrderInput | SortOrder
    emailVerificationExpiry?: SortOrderInput | SortOrder
    googleId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    refreshToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    forgotPasswordToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    forgotPasswordExpiry?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    isEmailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    emailVerificationToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailVerificationExpiry?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    googleId?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ProblemWhereInput = {
    AND?: ProblemWhereInput | ProblemWhereInput[]
    OR?: ProblemWhereInput[]
    NOT?: ProblemWhereInput | ProblemWhereInput[]
    id?: StringFilter<"Problem"> | string
    title?: StringFilter<"Problem"> | string
    description?: StringFilter<"Problem"> | string
    difficulty?: EnumDifficultyFilter<"Problem"> | $Enums.Difficulty
    tags?: StringNullableListFilter<"Problem">
    userId?: StringFilter<"Problem"> | string
    examples?: JsonFilter<"Problem">
    constraints?: StringFilter<"Problem"> | string
    hints?: StringNullableFilter<"Problem"> | string | null
    editorial?: StringNullableFilter<"Problem"> | string | null
    testcases?: JsonFilter<"Problem">
    codeSnippets?: JsonFilter<"Problem">
    referenceSolutions?: JsonFilter<"Problem">
    createdAt?: DateTimeFilter<"Problem"> | Date | string
    updatedAt?: DateTimeFilter<"Problem"> | Date | string
    submission?: SubmissionListRelationFilter
    solvedBy?: ProblemSolvedListRelationFilter
    problemsPlaylist?: ProblemInPlaylistListRelationFilter
    problemsSheet?: ProblemInSheetListRelationFilter
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ProblemOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    difficulty?: SortOrder
    tags?: SortOrder
    userId?: SortOrder
    examples?: SortOrder
    constraints?: SortOrder
    hints?: SortOrderInput | SortOrder
    editorial?: SortOrderInput | SortOrder
    testcases?: SortOrder
    codeSnippets?: SortOrder
    referenceSolutions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    submission?: SubmissionOrderByRelationAggregateInput
    solvedBy?: ProblemSolvedOrderByRelationAggregateInput
    problemsPlaylist?: ProblemInPlaylistOrderByRelationAggregateInput
    problemsSheet?: ProblemInSheetOrderByRelationAggregateInput
    User?: UserOrderByWithRelationInput
  }

  export type ProblemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProblemWhereInput | ProblemWhereInput[]
    OR?: ProblemWhereInput[]
    NOT?: ProblemWhereInput | ProblemWhereInput[]
    title?: StringFilter<"Problem"> | string
    description?: StringFilter<"Problem"> | string
    difficulty?: EnumDifficultyFilter<"Problem"> | $Enums.Difficulty
    tags?: StringNullableListFilter<"Problem">
    userId?: StringFilter<"Problem"> | string
    examples?: JsonFilter<"Problem">
    constraints?: StringFilter<"Problem"> | string
    hints?: StringNullableFilter<"Problem"> | string | null
    editorial?: StringNullableFilter<"Problem"> | string | null
    testcases?: JsonFilter<"Problem">
    codeSnippets?: JsonFilter<"Problem">
    referenceSolutions?: JsonFilter<"Problem">
    createdAt?: DateTimeFilter<"Problem"> | Date | string
    updatedAt?: DateTimeFilter<"Problem"> | Date | string
    submission?: SubmissionListRelationFilter
    solvedBy?: ProblemSolvedListRelationFilter
    problemsPlaylist?: ProblemInPlaylistListRelationFilter
    problemsSheet?: ProblemInSheetListRelationFilter
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ProblemOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    difficulty?: SortOrder
    tags?: SortOrder
    userId?: SortOrder
    examples?: SortOrder
    constraints?: SortOrder
    hints?: SortOrderInput | SortOrder
    editorial?: SortOrderInput | SortOrder
    testcases?: SortOrder
    codeSnippets?: SortOrder
    referenceSolutions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProblemCountOrderByAggregateInput
    _max?: ProblemMaxOrderByAggregateInput
    _min?: ProblemMinOrderByAggregateInput
  }

  export type ProblemScalarWhereWithAggregatesInput = {
    AND?: ProblemScalarWhereWithAggregatesInput | ProblemScalarWhereWithAggregatesInput[]
    OR?: ProblemScalarWhereWithAggregatesInput[]
    NOT?: ProblemScalarWhereWithAggregatesInput | ProblemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Problem"> | string
    title?: StringWithAggregatesFilter<"Problem"> | string
    description?: StringWithAggregatesFilter<"Problem"> | string
    difficulty?: EnumDifficultyWithAggregatesFilter<"Problem"> | $Enums.Difficulty
    tags?: StringNullableListFilter<"Problem">
    userId?: StringWithAggregatesFilter<"Problem"> | string
    examples?: JsonWithAggregatesFilter<"Problem">
    constraints?: StringWithAggregatesFilter<"Problem"> | string
    hints?: StringNullableWithAggregatesFilter<"Problem"> | string | null
    editorial?: StringNullableWithAggregatesFilter<"Problem"> | string | null
    testcases?: JsonWithAggregatesFilter<"Problem">
    codeSnippets?: JsonWithAggregatesFilter<"Problem">
    referenceSolutions?: JsonWithAggregatesFilter<"Problem">
    createdAt?: DateTimeWithAggregatesFilter<"Problem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Problem"> | Date | string
  }

  export type SubmissionWhereInput = {
    AND?: SubmissionWhereInput | SubmissionWhereInput[]
    OR?: SubmissionWhereInput[]
    NOT?: SubmissionWhereInput | SubmissionWhereInput[]
    id?: StringFilter<"Submission"> | string
    userId?: StringFilter<"Submission"> | string
    problemId?: StringFilter<"Submission"> | string
    sourceCode?: JsonFilter<"Submission">
    language?: StringFilter<"Submission"> | string
    stdin?: StringNullableFilter<"Submission"> | string | null
    stdout?: StringNullableFilter<"Submission"> | string | null
    stderr?: StringNullableFilter<"Submission"> | string | null
    compileOutput?: StringNullableFilter<"Submission"> | string | null
    status?: StringFilter<"Submission"> | string
    memory?: StringNullableFilter<"Submission"> | string | null
    time?: StringNullableFilter<"Submission"> | string | null
    createdAt?: DateTimeFilter<"Submission"> | Date | string
    updatedAt?: DateTimeFilter<"Submission"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    problem?: XOR<ProblemScalarRelationFilter, ProblemWhereInput>
    testCases?: TestCaseResultListRelationFilter
  }

  export type SubmissionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    problemId?: SortOrder
    sourceCode?: SortOrder
    language?: SortOrder
    stdin?: SortOrderInput | SortOrder
    stdout?: SortOrderInput | SortOrder
    stderr?: SortOrderInput | SortOrder
    compileOutput?: SortOrderInput | SortOrder
    status?: SortOrder
    memory?: SortOrderInput | SortOrder
    time?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    problem?: ProblemOrderByWithRelationInput
    testCases?: TestCaseResultOrderByRelationAggregateInput
  }

  export type SubmissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SubmissionWhereInput | SubmissionWhereInput[]
    OR?: SubmissionWhereInput[]
    NOT?: SubmissionWhereInput | SubmissionWhereInput[]
    userId?: StringFilter<"Submission"> | string
    problemId?: StringFilter<"Submission"> | string
    sourceCode?: JsonFilter<"Submission">
    language?: StringFilter<"Submission"> | string
    stdin?: StringNullableFilter<"Submission"> | string | null
    stdout?: StringNullableFilter<"Submission"> | string | null
    stderr?: StringNullableFilter<"Submission"> | string | null
    compileOutput?: StringNullableFilter<"Submission"> | string | null
    status?: StringFilter<"Submission"> | string
    memory?: StringNullableFilter<"Submission"> | string | null
    time?: StringNullableFilter<"Submission"> | string | null
    createdAt?: DateTimeFilter<"Submission"> | Date | string
    updatedAt?: DateTimeFilter<"Submission"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    problem?: XOR<ProblemScalarRelationFilter, ProblemWhereInput>
    testCases?: TestCaseResultListRelationFilter
  }, "id">

  export type SubmissionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    problemId?: SortOrder
    sourceCode?: SortOrder
    language?: SortOrder
    stdin?: SortOrderInput | SortOrder
    stdout?: SortOrderInput | SortOrder
    stderr?: SortOrderInput | SortOrder
    compileOutput?: SortOrderInput | SortOrder
    status?: SortOrder
    memory?: SortOrderInput | SortOrder
    time?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SubmissionCountOrderByAggregateInput
    _max?: SubmissionMaxOrderByAggregateInput
    _min?: SubmissionMinOrderByAggregateInput
  }

  export type SubmissionScalarWhereWithAggregatesInput = {
    AND?: SubmissionScalarWhereWithAggregatesInput | SubmissionScalarWhereWithAggregatesInput[]
    OR?: SubmissionScalarWhereWithAggregatesInput[]
    NOT?: SubmissionScalarWhereWithAggregatesInput | SubmissionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Submission"> | string
    userId?: StringWithAggregatesFilter<"Submission"> | string
    problemId?: StringWithAggregatesFilter<"Submission"> | string
    sourceCode?: JsonWithAggregatesFilter<"Submission">
    language?: StringWithAggregatesFilter<"Submission"> | string
    stdin?: StringNullableWithAggregatesFilter<"Submission"> | string | null
    stdout?: StringNullableWithAggregatesFilter<"Submission"> | string | null
    stderr?: StringNullableWithAggregatesFilter<"Submission"> | string | null
    compileOutput?: StringNullableWithAggregatesFilter<"Submission"> | string | null
    status?: StringWithAggregatesFilter<"Submission"> | string
    memory?: StringNullableWithAggregatesFilter<"Submission"> | string | null
    time?: StringNullableWithAggregatesFilter<"Submission"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Submission"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Submission"> | Date | string
  }

  export type TestCaseResultWhereInput = {
    AND?: TestCaseResultWhereInput | TestCaseResultWhereInput[]
    OR?: TestCaseResultWhereInput[]
    NOT?: TestCaseResultWhereInput | TestCaseResultWhereInput[]
    id?: StringFilter<"TestCaseResult"> | string
    submissionId?: StringFilter<"TestCaseResult"> | string
    testCase?: IntFilter<"TestCaseResult"> | number
    passed?: BoolFilter<"TestCaseResult"> | boolean
    stdout?: StringNullableFilter<"TestCaseResult"> | string | null
    expected?: StringFilter<"TestCaseResult"> | string
    stderr?: StringNullableFilter<"TestCaseResult"> | string | null
    compileOutput?: StringNullableFilter<"TestCaseResult"> | string | null
    status?: StringFilter<"TestCaseResult"> | string
    memory?: StringNullableFilter<"TestCaseResult"> | string | null
    time?: StringNullableFilter<"TestCaseResult"> | string | null
    createdAt?: DateTimeFilter<"TestCaseResult"> | Date | string
    updatedAt?: DateTimeFilter<"TestCaseResult"> | Date | string
    submission?: XOR<SubmissionScalarRelationFilter, SubmissionWhereInput>
  }

  export type TestCaseResultOrderByWithRelationInput = {
    id?: SortOrder
    submissionId?: SortOrder
    testCase?: SortOrder
    passed?: SortOrder
    stdout?: SortOrderInput | SortOrder
    expected?: SortOrder
    stderr?: SortOrderInput | SortOrder
    compileOutput?: SortOrderInput | SortOrder
    status?: SortOrder
    memory?: SortOrderInput | SortOrder
    time?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    submission?: SubmissionOrderByWithRelationInput
  }

  export type TestCaseResultWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TestCaseResultWhereInput | TestCaseResultWhereInput[]
    OR?: TestCaseResultWhereInput[]
    NOT?: TestCaseResultWhereInput | TestCaseResultWhereInput[]
    submissionId?: StringFilter<"TestCaseResult"> | string
    testCase?: IntFilter<"TestCaseResult"> | number
    passed?: BoolFilter<"TestCaseResult"> | boolean
    stdout?: StringNullableFilter<"TestCaseResult"> | string | null
    expected?: StringFilter<"TestCaseResult"> | string
    stderr?: StringNullableFilter<"TestCaseResult"> | string | null
    compileOutput?: StringNullableFilter<"TestCaseResult"> | string | null
    status?: StringFilter<"TestCaseResult"> | string
    memory?: StringNullableFilter<"TestCaseResult"> | string | null
    time?: StringNullableFilter<"TestCaseResult"> | string | null
    createdAt?: DateTimeFilter<"TestCaseResult"> | Date | string
    updatedAt?: DateTimeFilter<"TestCaseResult"> | Date | string
    submission?: XOR<SubmissionScalarRelationFilter, SubmissionWhereInput>
  }, "id">

  export type TestCaseResultOrderByWithAggregationInput = {
    id?: SortOrder
    submissionId?: SortOrder
    testCase?: SortOrder
    passed?: SortOrder
    stdout?: SortOrderInput | SortOrder
    expected?: SortOrder
    stderr?: SortOrderInput | SortOrder
    compileOutput?: SortOrderInput | SortOrder
    status?: SortOrder
    memory?: SortOrderInput | SortOrder
    time?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TestCaseResultCountOrderByAggregateInput
    _avg?: TestCaseResultAvgOrderByAggregateInput
    _max?: TestCaseResultMaxOrderByAggregateInput
    _min?: TestCaseResultMinOrderByAggregateInput
    _sum?: TestCaseResultSumOrderByAggregateInput
  }

  export type TestCaseResultScalarWhereWithAggregatesInput = {
    AND?: TestCaseResultScalarWhereWithAggregatesInput | TestCaseResultScalarWhereWithAggregatesInput[]
    OR?: TestCaseResultScalarWhereWithAggregatesInput[]
    NOT?: TestCaseResultScalarWhereWithAggregatesInput | TestCaseResultScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TestCaseResult"> | string
    submissionId?: StringWithAggregatesFilter<"TestCaseResult"> | string
    testCase?: IntWithAggregatesFilter<"TestCaseResult"> | number
    passed?: BoolWithAggregatesFilter<"TestCaseResult"> | boolean
    stdout?: StringNullableWithAggregatesFilter<"TestCaseResult"> | string | null
    expected?: StringWithAggregatesFilter<"TestCaseResult"> | string
    stderr?: StringNullableWithAggregatesFilter<"TestCaseResult"> | string | null
    compileOutput?: StringNullableWithAggregatesFilter<"TestCaseResult"> | string | null
    status?: StringWithAggregatesFilter<"TestCaseResult"> | string
    memory?: StringNullableWithAggregatesFilter<"TestCaseResult"> | string | null
    time?: StringNullableWithAggregatesFilter<"TestCaseResult"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"TestCaseResult"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TestCaseResult"> | Date | string
  }

  export type ProblemSolvedWhereInput = {
    AND?: ProblemSolvedWhereInput | ProblemSolvedWhereInput[]
    OR?: ProblemSolvedWhereInput[]
    NOT?: ProblemSolvedWhereInput | ProblemSolvedWhereInput[]
    id?: StringFilter<"ProblemSolved"> | string
    userId?: StringFilter<"ProblemSolved"> | string
    problemId?: StringFilter<"ProblemSolved"> | string
    createdAt?: DateTimeFilter<"ProblemSolved"> | Date | string
    updatedAt?: DateTimeFilter<"ProblemSolved"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    problem?: XOR<ProblemScalarRelationFilter, ProblemWhereInput>
  }

  export type ProblemSolvedOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    problemId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    problem?: ProblemOrderByWithRelationInput
  }

  export type ProblemSolvedWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_problemId?: ProblemSolvedUserIdProblemIdCompoundUniqueInput
    AND?: ProblemSolvedWhereInput | ProblemSolvedWhereInput[]
    OR?: ProblemSolvedWhereInput[]
    NOT?: ProblemSolvedWhereInput | ProblemSolvedWhereInput[]
    userId?: StringFilter<"ProblemSolved"> | string
    problemId?: StringFilter<"ProblemSolved"> | string
    createdAt?: DateTimeFilter<"ProblemSolved"> | Date | string
    updatedAt?: DateTimeFilter<"ProblemSolved"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    problem?: XOR<ProblemScalarRelationFilter, ProblemWhereInput>
  }, "id" | "userId_problemId">

  export type ProblemSolvedOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    problemId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProblemSolvedCountOrderByAggregateInput
    _max?: ProblemSolvedMaxOrderByAggregateInput
    _min?: ProblemSolvedMinOrderByAggregateInput
  }

  export type ProblemSolvedScalarWhereWithAggregatesInput = {
    AND?: ProblemSolvedScalarWhereWithAggregatesInput | ProblemSolvedScalarWhereWithAggregatesInput[]
    OR?: ProblemSolvedScalarWhereWithAggregatesInput[]
    NOT?: ProblemSolvedScalarWhereWithAggregatesInput | ProblemSolvedScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProblemSolved"> | string
    userId?: StringWithAggregatesFilter<"ProblemSolved"> | string
    problemId?: StringWithAggregatesFilter<"ProblemSolved"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ProblemSolved"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProblemSolved"> | Date | string
  }

  export type PlaylistWhereInput = {
    AND?: PlaylistWhereInput | PlaylistWhereInput[]
    OR?: PlaylistWhereInput[]
    NOT?: PlaylistWhereInput | PlaylistWhereInput[]
    id?: StringFilter<"Playlist"> | string
    name?: StringFilter<"Playlist"> | string
    description?: StringNullableFilter<"Playlist"> | string | null
    userId?: StringFilter<"Playlist"> | string
    createdAt?: DateTimeFilter<"Playlist"> | Date | string
    updatedAt?: DateTimeFilter<"Playlist"> | Date | string
    problems?: ProblemInPlaylistListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PlaylistOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    problems?: ProblemInPlaylistOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type PlaylistWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name_userId?: PlaylistNameUserIdCompoundUniqueInput
    AND?: PlaylistWhereInput | PlaylistWhereInput[]
    OR?: PlaylistWhereInput[]
    NOT?: PlaylistWhereInput | PlaylistWhereInput[]
    name?: StringFilter<"Playlist"> | string
    description?: StringNullableFilter<"Playlist"> | string | null
    userId?: StringFilter<"Playlist"> | string
    createdAt?: DateTimeFilter<"Playlist"> | Date | string
    updatedAt?: DateTimeFilter<"Playlist"> | Date | string
    problems?: ProblemInPlaylistListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "name_userId">

  export type PlaylistOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PlaylistCountOrderByAggregateInput
    _max?: PlaylistMaxOrderByAggregateInput
    _min?: PlaylistMinOrderByAggregateInput
  }

  export type PlaylistScalarWhereWithAggregatesInput = {
    AND?: PlaylistScalarWhereWithAggregatesInput | PlaylistScalarWhereWithAggregatesInput[]
    OR?: PlaylistScalarWhereWithAggregatesInput[]
    NOT?: PlaylistScalarWhereWithAggregatesInput | PlaylistScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Playlist"> | string
    name?: StringWithAggregatesFilter<"Playlist"> | string
    description?: StringNullableWithAggregatesFilter<"Playlist"> | string | null
    userId?: StringWithAggregatesFilter<"Playlist"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Playlist"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Playlist"> | Date | string
  }

  export type ProblemInPlaylistWhereInput = {
    AND?: ProblemInPlaylistWhereInput | ProblemInPlaylistWhereInput[]
    OR?: ProblemInPlaylistWhereInput[]
    NOT?: ProblemInPlaylistWhereInput | ProblemInPlaylistWhereInput[]
    id?: StringFilter<"ProblemInPlaylist"> | string
    problemId?: StringFilter<"ProblemInPlaylist"> | string
    playlistId?: StringFilter<"ProblemInPlaylist"> | string
    createdAt?: DateTimeFilter<"ProblemInPlaylist"> | Date | string
    updatedAt?: DateTimeFilter<"ProblemInPlaylist"> | Date | string
    playlist?: XOR<PlaylistScalarRelationFilter, PlaylistWhereInput>
    problem?: XOR<ProblemScalarRelationFilter, ProblemWhereInput>
  }

  export type ProblemInPlaylistOrderByWithRelationInput = {
    id?: SortOrder
    problemId?: SortOrder
    playlistId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    playlist?: PlaylistOrderByWithRelationInput
    problem?: ProblemOrderByWithRelationInput
  }

  export type ProblemInPlaylistWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    playlistId_problemId?: ProblemInPlaylistPlaylistIdProblemIdCompoundUniqueInput
    AND?: ProblemInPlaylistWhereInput | ProblemInPlaylistWhereInput[]
    OR?: ProblemInPlaylistWhereInput[]
    NOT?: ProblemInPlaylistWhereInput | ProblemInPlaylistWhereInput[]
    problemId?: StringFilter<"ProblemInPlaylist"> | string
    playlistId?: StringFilter<"ProblemInPlaylist"> | string
    createdAt?: DateTimeFilter<"ProblemInPlaylist"> | Date | string
    updatedAt?: DateTimeFilter<"ProblemInPlaylist"> | Date | string
    playlist?: XOR<PlaylistScalarRelationFilter, PlaylistWhereInput>
    problem?: XOR<ProblemScalarRelationFilter, ProblemWhereInput>
  }, "id" | "playlistId_problemId">

  export type ProblemInPlaylistOrderByWithAggregationInput = {
    id?: SortOrder
    problemId?: SortOrder
    playlistId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProblemInPlaylistCountOrderByAggregateInput
    _max?: ProblemInPlaylistMaxOrderByAggregateInput
    _min?: ProblemInPlaylistMinOrderByAggregateInput
  }

  export type ProblemInPlaylistScalarWhereWithAggregatesInput = {
    AND?: ProblemInPlaylistScalarWhereWithAggregatesInput | ProblemInPlaylistScalarWhereWithAggregatesInput[]
    OR?: ProblemInPlaylistScalarWhereWithAggregatesInput[]
    NOT?: ProblemInPlaylistScalarWhereWithAggregatesInput | ProblemInPlaylistScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProblemInPlaylist"> | string
    problemId?: StringWithAggregatesFilter<"ProblemInPlaylist"> | string
    playlistId?: StringWithAggregatesFilter<"ProblemInPlaylist"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ProblemInPlaylist"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProblemInPlaylist"> | Date | string
  }

  export type SheetWhereInput = {
    AND?: SheetWhereInput | SheetWhereInput[]
    OR?: SheetWhereInput[]
    NOT?: SheetWhereInput | SheetWhereInput[]
    id?: StringFilter<"Sheet"> | string
    title?: StringFilter<"Sheet"> | string
    company?: StringFilter<"Sheet"> | string
    description?: StringNullableFilter<"Sheet"> | string | null
    userId?: StringFilter<"Sheet"> | string
    price?: IntFilter<"Sheet"> | number
    isPaid?: BoolFilter<"Sheet"> | boolean
    createdAt?: DateTimeFilter<"Sheet"> | Date | string
    updatedAt?: DateTimeFilter<"Sheet"> | Date | string
    problems?: ProblemInSheetListRelationFilter
    orders?: OrderListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SheetOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    company?: SortOrder
    description?: SortOrderInput | SortOrder
    userId?: SortOrder
    price?: SortOrder
    isPaid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    problems?: ProblemInSheetOrderByRelationAggregateInput
    orders?: OrderOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type SheetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    title_company?: SheetTitleCompanyCompoundUniqueInput
    AND?: SheetWhereInput | SheetWhereInput[]
    OR?: SheetWhereInput[]
    NOT?: SheetWhereInput | SheetWhereInput[]
    title?: StringFilter<"Sheet"> | string
    company?: StringFilter<"Sheet"> | string
    description?: StringNullableFilter<"Sheet"> | string | null
    userId?: StringFilter<"Sheet"> | string
    price?: IntFilter<"Sheet"> | number
    isPaid?: BoolFilter<"Sheet"> | boolean
    createdAt?: DateTimeFilter<"Sheet"> | Date | string
    updatedAt?: DateTimeFilter<"Sheet"> | Date | string
    problems?: ProblemInSheetListRelationFilter
    orders?: OrderListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "title_company">

  export type SheetOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    company?: SortOrder
    description?: SortOrderInput | SortOrder
    userId?: SortOrder
    price?: SortOrder
    isPaid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SheetCountOrderByAggregateInput
    _avg?: SheetAvgOrderByAggregateInput
    _max?: SheetMaxOrderByAggregateInput
    _min?: SheetMinOrderByAggregateInput
    _sum?: SheetSumOrderByAggregateInput
  }

  export type SheetScalarWhereWithAggregatesInput = {
    AND?: SheetScalarWhereWithAggregatesInput | SheetScalarWhereWithAggregatesInput[]
    OR?: SheetScalarWhereWithAggregatesInput[]
    NOT?: SheetScalarWhereWithAggregatesInput | SheetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Sheet"> | string
    title?: StringWithAggregatesFilter<"Sheet"> | string
    company?: StringWithAggregatesFilter<"Sheet"> | string
    description?: StringNullableWithAggregatesFilter<"Sheet"> | string | null
    userId?: StringWithAggregatesFilter<"Sheet"> | string
    price?: IntWithAggregatesFilter<"Sheet"> | number
    isPaid?: BoolWithAggregatesFilter<"Sheet"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Sheet"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Sheet"> | Date | string
  }

  export type ProblemInSheetWhereInput = {
    AND?: ProblemInSheetWhereInput | ProblemInSheetWhereInput[]
    OR?: ProblemInSheetWhereInput[]
    NOT?: ProblemInSheetWhereInput | ProblemInSheetWhereInput[]
    id?: StringFilter<"ProblemInSheet"> | string
    problemId?: StringFilter<"ProblemInSheet"> | string
    sheetId?: StringFilter<"ProblemInSheet"> | string
    createdAt?: DateTimeFilter<"ProblemInSheet"> | Date | string
    updatedAt?: DateTimeFilter<"ProblemInSheet"> | Date | string
    sheet?: XOR<SheetScalarRelationFilter, SheetWhereInput>
    problem?: XOR<ProblemScalarRelationFilter, ProblemWhereInput>
  }

  export type ProblemInSheetOrderByWithRelationInput = {
    id?: SortOrder
    problemId?: SortOrder
    sheetId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sheet?: SheetOrderByWithRelationInput
    problem?: ProblemOrderByWithRelationInput
  }

  export type ProblemInSheetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sheetId_problemId?: ProblemInSheetSheetIdProblemIdCompoundUniqueInput
    AND?: ProblemInSheetWhereInput | ProblemInSheetWhereInput[]
    OR?: ProblemInSheetWhereInput[]
    NOT?: ProblemInSheetWhereInput | ProblemInSheetWhereInput[]
    problemId?: StringFilter<"ProblemInSheet"> | string
    sheetId?: StringFilter<"ProblemInSheet"> | string
    createdAt?: DateTimeFilter<"ProblemInSheet"> | Date | string
    updatedAt?: DateTimeFilter<"ProblemInSheet"> | Date | string
    sheet?: XOR<SheetScalarRelationFilter, SheetWhereInput>
    problem?: XOR<ProblemScalarRelationFilter, ProblemWhereInput>
  }, "id" | "sheetId_problemId">

  export type ProblemInSheetOrderByWithAggregationInput = {
    id?: SortOrder
    problemId?: SortOrder
    sheetId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProblemInSheetCountOrderByAggregateInput
    _max?: ProblemInSheetMaxOrderByAggregateInput
    _min?: ProblemInSheetMinOrderByAggregateInput
  }

  export type ProblemInSheetScalarWhereWithAggregatesInput = {
    AND?: ProblemInSheetScalarWhereWithAggregatesInput | ProblemInSheetScalarWhereWithAggregatesInput[]
    OR?: ProblemInSheetScalarWhereWithAggregatesInput[]
    NOT?: ProblemInSheetScalarWhereWithAggregatesInput | ProblemInSheetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProblemInSheet"> | string
    problemId?: StringWithAggregatesFilter<"ProblemInSheet"> | string
    sheetId?: StringWithAggregatesFilter<"ProblemInSheet"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ProblemInSheet"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProblemInSheet"> | Date | string
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: StringFilter<"Order"> | string
    userId?: StringFilter<"Order"> | string
    sheetId?: StringFilter<"Order"> | string
    razorpayOrderId?: StringFilter<"Order"> | string
    razorpayPaymentId?: StringNullableFilter<"Order"> | string | null
    razorpaySignature?: StringNullableFilter<"Order"> | string | null
    status?: StringFilter<"Order"> | string
    amount?: IntFilter<"Order"> | number
    createdAt?: DateTimeFilter<"Order"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    sheet?: XOR<SheetScalarRelationFilter, SheetWhereInput>
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    sheetId?: SortOrder
    razorpayOrderId?: SortOrder
    razorpayPaymentId?: SortOrderInput | SortOrder
    razorpaySignature?: SortOrderInput | SortOrder
    status?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    sheet?: SheetOrderByWithRelationInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    userId?: StringFilter<"Order"> | string
    sheetId?: StringFilter<"Order"> | string
    razorpayOrderId?: StringFilter<"Order"> | string
    razorpayPaymentId?: StringNullableFilter<"Order"> | string | null
    razorpaySignature?: StringNullableFilter<"Order"> | string | null
    status?: StringFilter<"Order"> | string
    amount?: IntFilter<"Order"> | number
    createdAt?: DateTimeFilter<"Order"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    sheet?: XOR<SheetScalarRelationFilter, SheetWhereInput>
  }, "id">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    sheetId?: SortOrder
    razorpayOrderId?: SortOrder
    razorpayPaymentId?: SortOrderInput | SortOrder
    razorpaySignature?: SortOrderInput | SortOrder
    status?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Order"> | string
    userId?: StringWithAggregatesFilter<"Order"> | string
    sheetId?: StringWithAggregatesFilter<"Order"> | string
    razorpayOrderId?: StringWithAggregatesFilter<"Order"> | string
    razorpayPaymentId?: StringNullableWithAggregatesFilter<"Order"> | string | null
    razorpaySignature?: StringNullableWithAggregatesFilter<"Order"> | string | null
    status?: StringWithAggregatesFilter<"Order"> | string
    amount?: IntWithAggregatesFilter<"Order"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email: string
    image?: string | null
    role?: $Enums.UserRole
    password?: string | null
    refreshToken?: string | null
    forgotPasswordToken?: string | null
    forgotPasswordExpiry?: Date | string | null
    isEmailVerified?: boolean
    emailVerificationToken?: string | null
    emailVerificationExpiry?: Date | string | null
    googleId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    prblems?: ProblemCreateNestedManyWithoutUserInput
    submissions?: SubmissionCreateNestedManyWithoutUserInput
    problemSolved?: ProblemSolvedCreateNestedManyWithoutUserInput
    playlists?: PlaylistCreateNestedManyWithoutUserInput
    sheet?: SheetCreateNestedManyWithoutUserInput
    orders?: OrderCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email: string
    image?: string | null
    role?: $Enums.UserRole
    password?: string | null
    refreshToken?: string | null
    forgotPasswordToken?: string | null
    forgotPasswordExpiry?: Date | string | null
    isEmailVerified?: boolean
    emailVerificationToken?: string | null
    emailVerificationExpiry?: Date | string | null
    googleId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    prblems?: ProblemUncheckedCreateNestedManyWithoutUserInput
    submissions?: SubmissionUncheckedCreateNestedManyWithoutUserInput
    problemSolved?: ProblemSolvedUncheckedCreateNestedManyWithoutUserInput
    playlists?: PlaylistUncheckedCreateNestedManyWithoutUserInput
    sheet?: SheetUncheckedCreateNestedManyWithoutUserInput
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    forgotPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    forgotPasswordExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prblems?: ProblemUpdateManyWithoutUserNestedInput
    submissions?: SubmissionUpdateManyWithoutUserNestedInput
    problemSolved?: ProblemSolvedUpdateManyWithoutUserNestedInput
    playlists?: PlaylistUpdateManyWithoutUserNestedInput
    sheet?: SheetUpdateManyWithoutUserNestedInput
    orders?: OrderUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    forgotPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    forgotPasswordExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prblems?: ProblemUncheckedUpdateManyWithoutUserNestedInput
    submissions?: SubmissionUncheckedUpdateManyWithoutUserNestedInput
    problemSolved?: ProblemSolvedUncheckedUpdateManyWithoutUserNestedInput
    playlists?: PlaylistUncheckedUpdateManyWithoutUserNestedInput
    sheet?: SheetUncheckedUpdateManyWithoutUserNestedInput
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email: string
    image?: string | null
    role?: $Enums.UserRole
    password?: string | null
    refreshToken?: string | null
    forgotPasswordToken?: string | null
    forgotPasswordExpiry?: Date | string | null
    isEmailVerified?: boolean
    emailVerificationToken?: string | null
    emailVerificationExpiry?: Date | string | null
    googleId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    forgotPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    forgotPasswordExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    forgotPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    forgotPasswordExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemCreateInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.Difficulty
    tags?: ProblemCreatetagsInput | string[]
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: string | null
    editorial?: string | null
    testcases: JsonNullValueInput | InputJsonValue
    codeSnippets: JsonNullValueInput | InputJsonValue
    referenceSolutions: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    submission?: SubmissionCreateNestedManyWithoutProblemInput
    solvedBy?: ProblemSolvedCreateNestedManyWithoutProblemInput
    problemsPlaylist?: ProblemInPlaylistCreateNestedManyWithoutProblemInput
    problemsSheet?: ProblemInSheetCreateNestedManyWithoutProblemInput
    User: UserCreateNestedOneWithoutPrblemsInput
  }

  export type ProblemUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.Difficulty
    tags?: ProblemCreatetagsInput | string[]
    userId: string
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: string | null
    editorial?: string | null
    testcases: JsonNullValueInput | InputJsonValue
    codeSnippets: JsonNullValueInput | InputJsonValue
    referenceSolutions: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    submission?: SubmissionUncheckedCreateNestedManyWithoutProblemInput
    solvedBy?: ProblemSolvedUncheckedCreateNestedManyWithoutProblemInput
    problemsPlaylist?: ProblemInPlaylistUncheckedCreateNestedManyWithoutProblemInput
    problemsSheet?: ProblemInSheetUncheckedCreateNestedManyWithoutProblemInput
  }

  export type ProblemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    tags?: ProblemUpdatetagsInput | string[]
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    testcases?: JsonNullValueInput | InputJsonValue
    codeSnippets?: JsonNullValueInput | InputJsonValue
    referenceSolutions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submission?: SubmissionUpdateManyWithoutProblemNestedInput
    solvedBy?: ProblemSolvedUpdateManyWithoutProblemNestedInput
    problemsPlaylist?: ProblemInPlaylistUpdateManyWithoutProblemNestedInput
    problemsSheet?: ProblemInSheetUpdateManyWithoutProblemNestedInput
    User?: UserUpdateOneRequiredWithoutPrblemsNestedInput
  }

  export type ProblemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    tags?: ProblemUpdatetagsInput | string[]
    userId?: StringFieldUpdateOperationsInput | string
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    testcases?: JsonNullValueInput | InputJsonValue
    codeSnippets?: JsonNullValueInput | InputJsonValue
    referenceSolutions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submission?: SubmissionUncheckedUpdateManyWithoutProblemNestedInput
    solvedBy?: ProblemSolvedUncheckedUpdateManyWithoutProblemNestedInput
    problemsPlaylist?: ProblemInPlaylistUncheckedUpdateManyWithoutProblemNestedInput
    problemsSheet?: ProblemInSheetUncheckedUpdateManyWithoutProblemNestedInput
  }

  export type ProblemCreateManyInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.Difficulty
    tags?: ProblemCreatetagsInput | string[]
    userId: string
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: string | null
    editorial?: string | null
    testcases: JsonNullValueInput | InputJsonValue
    codeSnippets: JsonNullValueInput | InputJsonValue
    referenceSolutions: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProblemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    tags?: ProblemUpdatetagsInput | string[]
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    testcases?: JsonNullValueInput | InputJsonValue
    codeSnippets?: JsonNullValueInput | InputJsonValue
    referenceSolutions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    tags?: ProblemUpdatetagsInput | string[]
    userId?: StringFieldUpdateOperationsInput | string
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    testcases?: JsonNullValueInput | InputJsonValue
    codeSnippets?: JsonNullValueInput | InputJsonValue
    referenceSolutions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionCreateInput = {
    id?: string
    sourceCode: JsonNullValueInput | InputJsonValue
    language: string
    stdin?: string | null
    stdout?: string | null
    stderr?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSubmissionsInput
    problem: ProblemCreateNestedOneWithoutSubmissionInput
    testCases?: TestCaseResultCreateNestedManyWithoutSubmissionInput
  }

  export type SubmissionUncheckedCreateInput = {
    id?: string
    userId: string
    problemId: string
    sourceCode: JsonNullValueInput | InputJsonValue
    language: string
    stdin?: string | null
    stdout?: string | null
    stderr?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    testCases?: TestCaseResultUncheckedCreateNestedManyWithoutSubmissionInput
  }

  export type SubmissionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceCode?: JsonNullValueInput | InputJsonValue
    language?: StringFieldUpdateOperationsInput | string
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSubmissionsNestedInput
    problem?: ProblemUpdateOneRequiredWithoutSubmissionNestedInput
    testCases?: TestCaseResultUpdateManyWithoutSubmissionNestedInput
  }

  export type SubmissionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    sourceCode?: JsonNullValueInput | InputJsonValue
    language?: StringFieldUpdateOperationsInput | string
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testCases?: TestCaseResultUncheckedUpdateManyWithoutSubmissionNestedInput
  }

  export type SubmissionCreateManyInput = {
    id?: string
    userId: string
    problemId: string
    sourceCode: JsonNullValueInput | InputJsonValue
    language: string
    stdin?: string | null
    stdout?: string | null
    stderr?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubmissionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceCode?: JsonNullValueInput | InputJsonValue
    language?: StringFieldUpdateOperationsInput | string
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    sourceCode?: JsonNullValueInput | InputJsonValue
    language?: StringFieldUpdateOperationsInput | string
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestCaseResultCreateInput = {
    id?: string
    testCase: number
    passed: boolean
    stdout?: string | null
    expected: string
    stderr?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    submission: SubmissionCreateNestedOneWithoutTestCasesInput
  }

  export type TestCaseResultUncheckedCreateInput = {
    id?: string
    submissionId: string
    testCase: number
    passed: boolean
    stdout?: string | null
    expected: string
    stderr?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TestCaseResultUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    testCase?: IntFieldUpdateOperationsInput | number
    passed?: BoolFieldUpdateOperationsInput | boolean
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    expected?: StringFieldUpdateOperationsInput | string
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submission?: SubmissionUpdateOneRequiredWithoutTestCasesNestedInput
  }

  export type TestCaseResultUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    submissionId?: StringFieldUpdateOperationsInput | string
    testCase?: IntFieldUpdateOperationsInput | number
    passed?: BoolFieldUpdateOperationsInput | boolean
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    expected?: StringFieldUpdateOperationsInput | string
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestCaseResultCreateManyInput = {
    id?: string
    submissionId: string
    testCase: number
    passed: boolean
    stdout?: string | null
    expected: string
    stderr?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TestCaseResultUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    testCase?: IntFieldUpdateOperationsInput | number
    passed?: BoolFieldUpdateOperationsInput | boolean
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    expected?: StringFieldUpdateOperationsInput | string
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestCaseResultUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    submissionId?: StringFieldUpdateOperationsInput | string
    testCase?: IntFieldUpdateOperationsInput | number
    passed?: BoolFieldUpdateOperationsInput | boolean
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    expected?: StringFieldUpdateOperationsInput | string
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemSolvedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProblemSolvedInput
    problem: ProblemCreateNestedOneWithoutSolvedByInput
  }

  export type ProblemSolvedUncheckedCreateInput = {
    id?: string
    userId: string
    problemId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProblemSolvedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProblemSolvedNestedInput
    problem?: ProblemUpdateOneRequiredWithoutSolvedByNestedInput
  }

  export type ProblemSolvedUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemSolvedCreateManyInput = {
    id?: string
    userId: string
    problemId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProblemSolvedUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemSolvedUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaylistCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: ProblemInPlaylistCreateNestedManyWithoutPlaylistInput
    user: UserCreateNestedOneWithoutPlaylistsInput
  }

  export type PlaylistUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: ProblemInPlaylistUncheckedCreateNestedManyWithoutPlaylistInput
  }

  export type PlaylistUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: ProblemInPlaylistUpdateManyWithoutPlaylistNestedInput
    user?: UserUpdateOneRequiredWithoutPlaylistsNestedInput
  }

  export type PlaylistUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: ProblemInPlaylistUncheckedUpdateManyWithoutPlaylistNestedInput
  }

  export type PlaylistCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlaylistUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaylistUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemInPlaylistCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    playlist: PlaylistCreateNestedOneWithoutProblemsInput
    problem: ProblemCreateNestedOneWithoutProblemsPlaylistInput
  }

  export type ProblemInPlaylistUncheckedCreateInput = {
    id?: string
    problemId: string
    playlistId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProblemInPlaylistUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playlist?: PlaylistUpdateOneRequiredWithoutProblemsNestedInput
    problem?: ProblemUpdateOneRequiredWithoutProblemsPlaylistNestedInput
  }

  export type ProblemInPlaylistUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    playlistId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemInPlaylistCreateManyInput = {
    id?: string
    problemId: string
    playlistId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProblemInPlaylistUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemInPlaylistUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    playlistId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SheetCreateInput = {
    id?: string
    title: string
    company: string
    description?: string | null
    price?: number
    isPaid?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: ProblemInSheetCreateNestedManyWithoutSheetInput
    orders?: OrderCreateNestedManyWithoutSheetInput
    user: UserCreateNestedOneWithoutSheetInput
  }

  export type SheetUncheckedCreateInput = {
    id?: string
    title: string
    company: string
    description?: string | null
    userId: string
    price?: number
    isPaid?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: ProblemInSheetUncheckedCreateNestedManyWithoutSheetInput
    orders?: OrderUncheckedCreateNestedManyWithoutSheetInput
  }

  export type SheetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: ProblemInSheetUpdateManyWithoutSheetNestedInput
    orders?: OrderUpdateManyWithoutSheetNestedInput
    user?: UserUpdateOneRequiredWithoutSheetNestedInput
  }

  export type SheetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: ProblemInSheetUncheckedUpdateManyWithoutSheetNestedInput
    orders?: OrderUncheckedUpdateManyWithoutSheetNestedInput
  }

  export type SheetCreateManyInput = {
    id?: string
    title: string
    company: string
    description?: string | null
    userId: string
    price?: number
    isPaid?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SheetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SheetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemInSheetCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sheet: SheetCreateNestedOneWithoutProblemsInput
    problem: ProblemCreateNestedOneWithoutProblemsSheetInput
  }

  export type ProblemInSheetUncheckedCreateInput = {
    id?: string
    problemId: string
    sheetId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProblemInSheetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sheet?: SheetUpdateOneRequiredWithoutProblemsNestedInput
    problem?: ProblemUpdateOneRequiredWithoutProblemsSheetNestedInput
  }

  export type ProblemInSheetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    sheetId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemInSheetCreateManyInput = {
    id?: string
    problemId: string
    sheetId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProblemInSheetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemInSheetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    sheetId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateInput = {
    id?: string
    razorpayOrderId: string
    razorpayPaymentId?: string | null
    razorpaySignature?: string | null
    status: string
    amount: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutOrdersInput
    sheet: SheetCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateInput = {
    id?: string
    userId: string
    sheetId: string
    razorpayOrderId: string
    razorpayPaymentId?: string | null
    razorpaySignature?: string | null
    status: string
    amount: number
    createdAt?: Date | string
  }

  export type OrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    razorpayOrderId?: StringFieldUpdateOperationsInput | string
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
    sheet?: SheetUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    sheetId?: StringFieldUpdateOperationsInput | string
    razorpayOrderId?: StringFieldUpdateOperationsInput | string
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateManyInput = {
    id?: string
    userId: string
    sheetId: string
    razorpayOrderId: string
    razorpayPaymentId?: string | null
    razorpaySignature?: string | null
    status: string
    amount: number
    createdAt?: Date | string
  }

  export type OrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    razorpayOrderId?: StringFieldUpdateOperationsInput | string
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    sheetId?: StringFieldUpdateOperationsInput | string
    razorpayOrderId?: StringFieldUpdateOperationsInput | string
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ProblemListRelationFilter = {
    every?: ProblemWhereInput
    some?: ProblemWhereInput
    none?: ProblemWhereInput
  }

  export type SubmissionListRelationFilter = {
    every?: SubmissionWhereInput
    some?: SubmissionWhereInput
    none?: SubmissionWhereInput
  }

  export type ProblemSolvedListRelationFilter = {
    every?: ProblemSolvedWhereInput
    some?: ProblemSolvedWhereInput
    none?: ProblemSolvedWhereInput
  }

  export type PlaylistListRelationFilter = {
    every?: PlaylistWhereInput
    some?: PlaylistWhereInput
    none?: PlaylistWhereInput
  }

  export type SheetListRelationFilter = {
    every?: SheetWhereInput
    some?: SheetWhereInput
    none?: SheetWhereInput
  }

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProblemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubmissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProblemSolvedOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlaylistOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SheetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    image?: SortOrder
    role?: SortOrder
    password?: SortOrder
    refreshToken?: SortOrder
    forgotPasswordToken?: SortOrder
    forgotPasswordExpiry?: SortOrder
    isEmailVerified?: SortOrder
    emailVerificationToken?: SortOrder
    emailVerificationExpiry?: SortOrder
    googleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    image?: SortOrder
    role?: SortOrder
    password?: SortOrder
    refreshToken?: SortOrder
    forgotPasswordToken?: SortOrder
    forgotPasswordExpiry?: SortOrder
    isEmailVerified?: SortOrder
    emailVerificationToken?: SortOrder
    emailVerificationExpiry?: SortOrder
    googleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    image?: SortOrder
    role?: SortOrder
    password?: SortOrder
    refreshToken?: SortOrder
    forgotPasswordToken?: SortOrder
    forgotPasswordExpiry?: SortOrder
    isEmailVerified?: SortOrder
    emailVerificationToken?: SortOrder
    emailVerificationExpiry?: SortOrder
    googleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumDifficultyFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyFilter<$PrismaModel> | $Enums.Difficulty
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ProblemInPlaylistListRelationFilter = {
    every?: ProblemInPlaylistWhereInput
    some?: ProblemInPlaylistWhereInput
    none?: ProblemInPlaylistWhereInput
  }

  export type ProblemInSheetListRelationFilter = {
    every?: ProblemInSheetWhereInput
    some?: ProblemInSheetWhereInput
    none?: ProblemInSheetWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ProblemInPlaylistOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProblemInSheetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProblemCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    difficulty?: SortOrder
    tags?: SortOrder
    userId?: SortOrder
    examples?: SortOrder
    constraints?: SortOrder
    hints?: SortOrder
    editorial?: SortOrder
    testcases?: SortOrder
    codeSnippets?: SortOrder
    referenceSolutions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProblemMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    difficulty?: SortOrder
    userId?: SortOrder
    constraints?: SortOrder
    hints?: SortOrder
    editorial?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProblemMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    difficulty?: SortOrder
    userId?: SortOrder
    constraints?: SortOrder
    hints?: SortOrder
    editorial?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumDifficultyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyWithAggregatesFilter<$PrismaModel> | $Enums.Difficulty
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDifficultyFilter<$PrismaModel>
    _max?: NestedEnumDifficultyFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type ProblemScalarRelationFilter = {
    is?: ProblemWhereInput
    isNot?: ProblemWhereInput
  }

  export type TestCaseResultListRelationFilter = {
    every?: TestCaseResultWhereInput
    some?: TestCaseResultWhereInput
    none?: TestCaseResultWhereInput
  }

  export type TestCaseResultOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubmissionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    problemId?: SortOrder
    sourceCode?: SortOrder
    language?: SortOrder
    stdin?: SortOrder
    stdout?: SortOrder
    stderr?: SortOrder
    compileOutput?: SortOrder
    status?: SortOrder
    memory?: SortOrder
    time?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubmissionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    problemId?: SortOrder
    language?: SortOrder
    stdin?: SortOrder
    stdout?: SortOrder
    stderr?: SortOrder
    compileOutput?: SortOrder
    status?: SortOrder
    memory?: SortOrder
    time?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubmissionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    problemId?: SortOrder
    language?: SortOrder
    stdin?: SortOrder
    stdout?: SortOrder
    stderr?: SortOrder
    compileOutput?: SortOrder
    status?: SortOrder
    memory?: SortOrder
    time?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type SubmissionScalarRelationFilter = {
    is?: SubmissionWhereInput
    isNot?: SubmissionWhereInput
  }

  export type TestCaseResultCountOrderByAggregateInput = {
    id?: SortOrder
    submissionId?: SortOrder
    testCase?: SortOrder
    passed?: SortOrder
    stdout?: SortOrder
    expected?: SortOrder
    stderr?: SortOrder
    compileOutput?: SortOrder
    status?: SortOrder
    memory?: SortOrder
    time?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TestCaseResultAvgOrderByAggregateInput = {
    testCase?: SortOrder
  }

  export type TestCaseResultMaxOrderByAggregateInput = {
    id?: SortOrder
    submissionId?: SortOrder
    testCase?: SortOrder
    passed?: SortOrder
    stdout?: SortOrder
    expected?: SortOrder
    stderr?: SortOrder
    compileOutput?: SortOrder
    status?: SortOrder
    memory?: SortOrder
    time?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TestCaseResultMinOrderByAggregateInput = {
    id?: SortOrder
    submissionId?: SortOrder
    testCase?: SortOrder
    passed?: SortOrder
    stdout?: SortOrder
    expected?: SortOrder
    stderr?: SortOrder
    compileOutput?: SortOrder
    status?: SortOrder
    memory?: SortOrder
    time?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TestCaseResultSumOrderByAggregateInput = {
    testCase?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type ProblemSolvedUserIdProblemIdCompoundUniqueInput = {
    userId: string
    problemId: string
  }

  export type ProblemSolvedCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    problemId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProblemSolvedMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    problemId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProblemSolvedMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    problemId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlaylistNameUserIdCompoundUniqueInput = {
    name: string
    userId: string
  }

  export type PlaylistCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlaylistMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlaylistMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlaylistScalarRelationFilter = {
    is?: PlaylistWhereInput
    isNot?: PlaylistWhereInput
  }

  export type ProblemInPlaylistPlaylistIdProblemIdCompoundUniqueInput = {
    playlistId: string
    problemId: string
  }

  export type ProblemInPlaylistCountOrderByAggregateInput = {
    id?: SortOrder
    problemId?: SortOrder
    playlistId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProblemInPlaylistMaxOrderByAggregateInput = {
    id?: SortOrder
    problemId?: SortOrder
    playlistId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProblemInPlaylistMinOrderByAggregateInput = {
    id?: SortOrder
    problemId?: SortOrder
    playlistId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SheetTitleCompanyCompoundUniqueInput = {
    title: string
    company: string
  }

  export type SheetCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    company?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    price?: SortOrder
    isPaid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SheetAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type SheetMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    company?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    price?: SortOrder
    isPaid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SheetMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    company?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    price?: SortOrder
    isPaid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SheetSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type SheetScalarRelationFilter = {
    is?: SheetWhereInput
    isNot?: SheetWhereInput
  }

  export type ProblemInSheetSheetIdProblemIdCompoundUniqueInput = {
    sheetId: string
    problemId: string
  }

  export type ProblemInSheetCountOrderByAggregateInput = {
    id?: SortOrder
    problemId?: SortOrder
    sheetId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProblemInSheetMaxOrderByAggregateInput = {
    id?: SortOrder
    problemId?: SortOrder
    sheetId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProblemInSheetMinOrderByAggregateInput = {
    id?: SortOrder
    problemId?: SortOrder
    sheetId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sheetId?: SortOrder
    razorpayOrderId?: SortOrder
    razorpayPaymentId?: SortOrder
    razorpaySignature?: SortOrder
    status?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sheetId?: SortOrder
    razorpayOrderId?: SortOrder
    razorpayPaymentId?: SortOrder
    razorpaySignature?: SortOrder
    status?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sheetId?: SortOrder
    razorpayOrderId?: SortOrder
    razorpayPaymentId?: SortOrder
    razorpaySignature?: SortOrder
    status?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type ProblemCreateNestedManyWithoutUserInput = {
    create?: XOR<ProblemCreateWithoutUserInput, ProblemUncheckedCreateWithoutUserInput> | ProblemCreateWithoutUserInput[] | ProblemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProblemCreateOrConnectWithoutUserInput | ProblemCreateOrConnectWithoutUserInput[]
    createMany?: ProblemCreateManyUserInputEnvelope
    connect?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
  }

  export type SubmissionCreateNestedManyWithoutUserInput = {
    create?: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput> | SubmissionCreateWithoutUserInput[] | SubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutUserInput | SubmissionCreateOrConnectWithoutUserInput[]
    createMany?: SubmissionCreateManyUserInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type ProblemSolvedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProblemSolvedCreateWithoutUserInput, ProblemSolvedUncheckedCreateWithoutUserInput> | ProblemSolvedCreateWithoutUserInput[] | ProblemSolvedUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProblemSolvedCreateOrConnectWithoutUserInput | ProblemSolvedCreateOrConnectWithoutUserInput[]
    createMany?: ProblemSolvedCreateManyUserInputEnvelope
    connect?: ProblemSolvedWhereUniqueInput | ProblemSolvedWhereUniqueInput[]
  }

  export type PlaylistCreateNestedManyWithoutUserInput = {
    create?: XOR<PlaylistCreateWithoutUserInput, PlaylistUncheckedCreateWithoutUserInput> | PlaylistCreateWithoutUserInput[] | PlaylistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlaylistCreateOrConnectWithoutUserInput | PlaylistCreateOrConnectWithoutUserInput[]
    createMany?: PlaylistCreateManyUserInputEnvelope
    connect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
  }

  export type SheetCreateNestedManyWithoutUserInput = {
    create?: XOR<SheetCreateWithoutUserInput, SheetUncheckedCreateWithoutUserInput> | SheetCreateWithoutUserInput[] | SheetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SheetCreateOrConnectWithoutUserInput | SheetCreateOrConnectWithoutUserInput[]
    createMany?: SheetCreateManyUserInputEnvelope
    connect?: SheetWhereUniqueInput | SheetWhereUniqueInput[]
  }

  export type OrderCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type ProblemUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProblemCreateWithoutUserInput, ProblemUncheckedCreateWithoutUserInput> | ProblemCreateWithoutUserInput[] | ProblemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProblemCreateOrConnectWithoutUserInput | ProblemCreateOrConnectWithoutUserInput[]
    createMany?: ProblemCreateManyUserInputEnvelope
    connect?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
  }

  export type SubmissionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput> | SubmissionCreateWithoutUserInput[] | SubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutUserInput | SubmissionCreateOrConnectWithoutUserInput[]
    createMany?: SubmissionCreateManyUserInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type ProblemSolvedUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProblemSolvedCreateWithoutUserInput, ProblemSolvedUncheckedCreateWithoutUserInput> | ProblemSolvedCreateWithoutUserInput[] | ProblemSolvedUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProblemSolvedCreateOrConnectWithoutUserInput | ProblemSolvedCreateOrConnectWithoutUserInput[]
    createMany?: ProblemSolvedCreateManyUserInputEnvelope
    connect?: ProblemSolvedWhereUniqueInput | ProblemSolvedWhereUniqueInput[]
  }

  export type PlaylistUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PlaylistCreateWithoutUserInput, PlaylistUncheckedCreateWithoutUserInput> | PlaylistCreateWithoutUserInput[] | PlaylistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlaylistCreateOrConnectWithoutUserInput | PlaylistCreateOrConnectWithoutUserInput[]
    createMany?: PlaylistCreateManyUserInputEnvelope
    connect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
  }

  export type SheetUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SheetCreateWithoutUserInput, SheetUncheckedCreateWithoutUserInput> | SheetCreateWithoutUserInput[] | SheetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SheetCreateOrConnectWithoutUserInput | SheetCreateOrConnectWithoutUserInput[]
    createMany?: SheetCreateManyUserInputEnvelope
    connect?: SheetWhereUniqueInput | SheetWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProblemUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProblemCreateWithoutUserInput, ProblemUncheckedCreateWithoutUserInput> | ProblemCreateWithoutUserInput[] | ProblemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProblemCreateOrConnectWithoutUserInput | ProblemCreateOrConnectWithoutUserInput[]
    upsert?: ProblemUpsertWithWhereUniqueWithoutUserInput | ProblemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProblemCreateManyUserInputEnvelope
    set?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    disconnect?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    delete?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    connect?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    update?: ProblemUpdateWithWhereUniqueWithoutUserInput | ProblemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProblemUpdateManyWithWhereWithoutUserInput | ProblemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProblemScalarWhereInput | ProblemScalarWhereInput[]
  }

  export type SubmissionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput> | SubmissionCreateWithoutUserInput[] | SubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutUserInput | SubmissionCreateOrConnectWithoutUserInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutUserInput | SubmissionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SubmissionCreateManyUserInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutUserInput | SubmissionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutUserInput | SubmissionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type ProblemSolvedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProblemSolvedCreateWithoutUserInput, ProblemSolvedUncheckedCreateWithoutUserInput> | ProblemSolvedCreateWithoutUserInput[] | ProblemSolvedUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProblemSolvedCreateOrConnectWithoutUserInput | ProblemSolvedCreateOrConnectWithoutUserInput[]
    upsert?: ProblemSolvedUpsertWithWhereUniqueWithoutUserInput | ProblemSolvedUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProblemSolvedCreateManyUserInputEnvelope
    set?: ProblemSolvedWhereUniqueInput | ProblemSolvedWhereUniqueInput[]
    disconnect?: ProblemSolvedWhereUniqueInput | ProblemSolvedWhereUniqueInput[]
    delete?: ProblemSolvedWhereUniqueInput | ProblemSolvedWhereUniqueInput[]
    connect?: ProblemSolvedWhereUniqueInput | ProblemSolvedWhereUniqueInput[]
    update?: ProblemSolvedUpdateWithWhereUniqueWithoutUserInput | ProblemSolvedUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProblemSolvedUpdateManyWithWhereWithoutUserInput | ProblemSolvedUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProblemSolvedScalarWhereInput | ProblemSolvedScalarWhereInput[]
  }

  export type PlaylistUpdateManyWithoutUserNestedInput = {
    create?: XOR<PlaylistCreateWithoutUserInput, PlaylistUncheckedCreateWithoutUserInput> | PlaylistCreateWithoutUserInput[] | PlaylistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlaylistCreateOrConnectWithoutUserInput | PlaylistCreateOrConnectWithoutUserInput[]
    upsert?: PlaylistUpsertWithWhereUniqueWithoutUserInput | PlaylistUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PlaylistCreateManyUserInputEnvelope
    set?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    disconnect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    delete?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    connect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    update?: PlaylistUpdateWithWhereUniqueWithoutUserInput | PlaylistUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PlaylistUpdateManyWithWhereWithoutUserInput | PlaylistUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PlaylistScalarWhereInput | PlaylistScalarWhereInput[]
  }

  export type SheetUpdateManyWithoutUserNestedInput = {
    create?: XOR<SheetCreateWithoutUserInput, SheetUncheckedCreateWithoutUserInput> | SheetCreateWithoutUserInput[] | SheetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SheetCreateOrConnectWithoutUserInput | SheetCreateOrConnectWithoutUserInput[]
    upsert?: SheetUpsertWithWhereUniqueWithoutUserInput | SheetUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SheetCreateManyUserInputEnvelope
    set?: SheetWhereUniqueInput | SheetWhereUniqueInput[]
    disconnect?: SheetWhereUniqueInput | SheetWhereUniqueInput[]
    delete?: SheetWhereUniqueInput | SheetWhereUniqueInput[]
    connect?: SheetWhereUniqueInput | SheetWhereUniqueInput[]
    update?: SheetUpdateWithWhereUniqueWithoutUserInput | SheetUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SheetUpdateManyWithWhereWithoutUserInput | SheetUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SheetScalarWhereInput | SheetScalarWhereInput[]
  }

  export type OrderUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type ProblemUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProblemCreateWithoutUserInput, ProblemUncheckedCreateWithoutUserInput> | ProblemCreateWithoutUserInput[] | ProblemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProblemCreateOrConnectWithoutUserInput | ProblemCreateOrConnectWithoutUserInput[]
    upsert?: ProblemUpsertWithWhereUniqueWithoutUserInput | ProblemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProblemCreateManyUserInputEnvelope
    set?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    disconnect?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    delete?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    connect?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    update?: ProblemUpdateWithWhereUniqueWithoutUserInput | ProblemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProblemUpdateManyWithWhereWithoutUserInput | ProblemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProblemScalarWhereInput | ProblemScalarWhereInput[]
  }

  export type SubmissionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput> | SubmissionCreateWithoutUserInput[] | SubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutUserInput | SubmissionCreateOrConnectWithoutUserInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutUserInput | SubmissionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SubmissionCreateManyUserInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutUserInput | SubmissionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutUserInput | SubmissionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type ProblemSolvedUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProblemSolvedCreateWithoutUserInput, ProblemSolvedUncheckedCreateWithoutUserInput> | ProblemSolvedCreateWithoutUserInput[] | ProblemSolvedUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProblemSolvedCreateOrConnectWithoutUserInput | ProblemSolvedCreateOrConnectWithoutUserInput[]
    upsert?: ProblemSolvedUpsertWithWhereUniqueWithoutUserInput | ProblemSolvedUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProblemSolvedCreateManyUserInputEnvelope
    set?: ProblemSolvedWhereUniqueInput | ProblemSolvedWhereUniqueInput[]
    disconnect?: ProblemSolvedWhereUniqueInput | ProblemSolvedWhereUniqueInput[]
    delete?: ProblemSolvedWhereUniqueInput | ProblemSolvedWhereUniqueInput[]
    connect?: ProblemSolvedWhereUniqueInput | ProblemSolvedWhereUniqueInput[]
    update?: ProblemSolvedUpdateWithWhereUniqueWithoutUserInput | ProblemSolvedUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProblemSolvedUpdateManyWithWhereWithoutUserInput | ProblemSolvedUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProblemSolvedScalarWhereInput | ProblemSolvedScalarWhereInput[]
  }

  export type PlaylistUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PlaylistCreateWithoutUserInput, PlaylistUncheckedCreateWithoutUserInput> | PlaylistCreateWithoutUserInput[] | PlaylistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlaylistCreateOrConnectWithoutUserInput | PlaylistCreateOrConnectWithoutUserInput[]
    upsert?: PlaylistUpsertWithWhereUniqueWithoutUserInput | PlaylistUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PlaylistCreateManyUserInputEnvelope
    set?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    disconnect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    delete?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    connect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    update?: PlaylistUpdateWithWhereUniqueWithoutUserInput | PlaylistUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PlaylistUpdateManyWithWhereWithoutUserInput | PlaylistUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PlaylistScalarWhereInput | PlaylistScalarWhereInput[]
  }

  export type SheetUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SheetCreateWithoutUserInput, SheetUncheckedCreateWithoutUserInput> | SheetCreateWithoutUserInput[] | SheetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SheetCreateOrConnectWithoutUserInput | SheetCreateOrConnectWithoutUserInput[]
    upsert?: SheetUpsertWithWhereUniqueWithoutUserInput | SheetUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SheetCreateManyUserInputEnvelope
    set?: SheetWhereUniqueInput | SheetWhereUniqueInput[]
    disconnect?: SheetWhereUniqueInput | SheetWhereUniqueInput[]
    delete?: SheetWhereUniqueInput | SheetWhereUniqueInput[]
    connect?: SheetWhereUniqueInput | SheetWhereUniqueInput[]
    update?: SheetUpdateWithWhereUniqueWithoutUserInput | SheetUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SheetUpdateManyWithWhereWithoutUserInput | SheetUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SheetScalarWhereInput | SheetScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type ProblemCreatetagsInput = {
    set: string[]
  }

  export type SubmissionCreateNestedManyWithoutProblemInput = {
    create?: XOR<SubmissionCreateWithoutProblemInput, SubmissionUncheckedCreateWithoutProblemInput> | SubmissionCreateWithoutProblemInput[] | SubmissionUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutProblemInput | SubmissionCreateOrConnectWithoutProblemInput[]
    createMany?: SubmissionCreateManyProblemInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type ProblemSolvedCreateNestedManyWithoutProblemInput = {
    create?: XOR<ProblemSolvedCreateWithoutProblemInput, ProblemSolvedUncheckedCreateWithoutProblemInput> | ProblemSolvedCreateWithoutProblemInput[] | ProblemSolvedUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: ProblemSolvedCreateOrConnectWithoutProblemInput | ProblemSolvedCreateOrConnectWithoutProblemInput[]
    createMany?: ProblemSolvedCreateManyProblemInputEnvelope
    connect?: ProblemSolvedWhereUniqueInput | ProblemSolvedWhereUniqueInput[]
  }

  export type ProblemInPlaylistCreateNestedManyWithoutProblemInput = {
    create?: XOR<ProblemInPlaylistCreateWithoutProblemInput, ProblemInPlaylistUncheckedCreateWithoutProblemInput> | ProblemInPlaylistCreateWithoutProblemInput[] | ProblemInPlaylistUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: ProblemInPlaylistCreateOrConnectWithoutProblemInput | ProblemInPlaylistCreateOrConnectWithoutProblemInput[]
    createMany?: ProblemInPlaylistCreateManyProblemInputEnvelope
    connect?: ProblemInPlaylistWhereUniqueInput | ProblemInPlaylistWhereUniqueInput[]
  }

  export type ProblemInSheetCreateNestedManyWithoutProblemInput = {
    create?: XOR<ProblemInSheetCreateWithoutProblemInput, ProblemInSheetUncheckedCreateWithoutProblemInput> | ProblemInSheetCreateWithoutProblemInput[] | ProblemInSheetUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: ProblemInSheetCreateOrConnectWithoutProblemInput | ProblemInSheetCreateOrConnectWithoutProblemInput[]
    createMany?: ProblemInSheetCreateManyProblemInputEnvelope
    connect?: ProblemInSheetWhereUniqueInput | ProblemInSheetWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutPrblemsInput = {
    create?: XOR<UserCreateWithoutPrblemsInput, UserUncheckedCreateWithoutPrblemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPrblemsInput
    connect?: UserWhereUniqueInput
  }

  export type SubmissionUncheckedCreateNestedManyWithoutProblemInput = {
    create?: XOR<SubmissionCreateWithoutProblemInput, SubmissionUncheckedCreateWithoutProblemInput> | SubmissionCreateWithoutProblemInput[] | SubmissionUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutProblemInput | SubmissionCreateOrConnectWithoutProblemInput[]
    createMany?: SubmissionCreateManyProblemInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type ProblemSolvedUncheckedCreateNestedManyWithoutProblemInput = {
    create?: XOR<ProblemSolvedCreateWithoutProblemInput, ProblemSolvedUncheckedCreateWithoutProblemInput> | ProblemSolvedCreateWithoutProblemInput[] | ProblemSolvedUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: ProblemSolvedCreateOrConnectWithoutProblemInput | ProblemSolvedCreateOrConnectWithoutProblemInput[]
    createMany?: ProblemSolvedCreateManyProblemInputEnvelope
    connect?: ProblemSolvedWhereUniqueInput | ProblemSolvedWhereUniqueInput[]
  }

  export type ProblemInPlaylistUncheckedCreateNestedManyWithoutProblemInput = {
    create?: XOR<ProblemInPlaylistCreateWithoutProblemInput, ProblemInPlaylistUncheckedCreateWithoutProblemInput> | ProblemInPlaylistCreateWithoutProblemInput[] | ProblemInPlaylistUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: ProblemInPlaylistCreateOrConnectWithoutProblemInput | ProblemInPlaylistCreateOrConnectWithoutProblemInput[]
    createMany?: ProblemInPlaylistCreateManyProblemInputEnvelope
    connect?: ProblemInPlaylistWhereUniqueInput | ProblemInPlaylistWhereUniqueInput[]
  }

  export type ProblemInSheetUncheckedCreateNestedManyWithoutProblemInput = {
    create?: XOR<ProblemInSheetCreateWithoutProblemInput, ProblemInSheetUncheckedCreateWithoutProblemInput> | ProblemInSheetCreateWithoutProblemInput[] | ProblemInSheetUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: ProblemInSheetCreateOrConnectWithoutProblemInput | ProblemInSheetCreateOrConnectWithoutProblemInput[]
    createMany?: ProblemInSheetCreateManyProblemInputEnvelope
    connect?: ProblemInSheetWhereUniqueInput | ProblemInSheetWhereUniqueInput[]
  }

  export type EnumDifficultyFieldUpdateOperationsInput = {
    set?: $Enums.Difficulty
  }

  export type ProblemUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type SubmissionUpdateManyWithoutProblemNestedInput = {
    create?: XOR<SubmissionCreateWithoutProblemInput, SubmissionUncheckedCreateWithoutProblemInput> | SubmissionCreateWithoutProblemInput[] | SubmissionUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutProblemInput | SubmissionCreateOrConnectWithoutProblemInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutProblemInput | SubmissionUpsertWithWhereUniqueWithoutProblemInput[]
    createMany?: SubmissionCreateManyProblemInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutProblemInput | SubmissionUpdateWithWhereUniqueWithoutProblemInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutProblemInput | SubmissionUpdateManyWithWhereWithoutProblemInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type ProblemSolvedUpdateManyWithoutProblemNestedInput = {
    create?: XOR<ProblemSolvedCreateWithoutProblemInput, ProblemSolvedUncheckedCreateWithoutProblemInput> | ProblemSolvedCreateWithoutProblemInput[] | ProblemSolvedUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: ProblemSolvedCreateOrConnectWithoutProblemInput | ProblemSolvedCreateOrConnectWithoutProblemInput[]
    upsert?: ProblemSolvedUpsertWithWhereUniqueWithoutProblemInput | ProblemSolvedUpsertWithWhereUniqueWithoutProblemInput[]
    createMany?: ProblemSolvedCreateManyProblemInputEnvelope
    set?: ProblemSolvedWhereUniqueInput | ProblemSolvedWhereUniqueInput[]
    disconnect?: ProblemSolvedWhereUniqueInput | ProblemSolvedWhereUniqueInput[]
    delete?: ProblemSolvedWhereUniqueInput | ProblemSolvedWhereUniqueInput[]
    connect?: ProblemSolvedWhereUniqueInput | ProblemSolvedWhereUniqueInput[]
    update?: ProblemSolvedUpdateWithWhereUniqueWithoutProblemInput | ProblemSolvedUpdateWithWhereUniqueWithoutProblemInput[]
    updateMany?: ProblemSolvedUpdateManyWithWhereWithoutProblemInput | ProblemSolvedUpdateManyWithWhereWithoutProblemInput[]
    deleteMany?: ProblemSolvedScalarWhereInput | ProblemSolvedScalarWhereInput[]
  }

  export type ProblemInPlaylistUpdateManyWithoutProblemNestedInput = {
    create?: XOR<ProblemInPlaylistCreateWithoutProblemInput, ProblemInPlaylistUncheckedCreateWithoutProblemInput> | ProblemInPlaylistCreateWithoutProblemInput[] | ProblemInPlaylistUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: ProblemInPlaylistCreateOrConnectWithoutProblemInput | ProblemInPlaylistCreateOrConnectWithoutProblemInput[]
    upsert?: ProblemInPlaylistUpsertWithWhereUniqueWithoutProblemInput | ProblemInPlaylistUpsertWithWhereUniqueWithoutProblemInput[]
    createMany?: ProblemInPlaylistCreateManyProblemInputEnvelope
    set?: ProblemInPlaylistWhereUniqueInput | ProblemInPlaylistWhereUniqueInput[]
    disconnect?: ProblemInPlaylistWhereUniqueInput | ProblemInPlaylistWhereUniqueInput[]
    delete?: ProblemInPlaylistWhereUniqueInput | ProblemInPlaylistWhereUniqueInput[]
    connect?: ProblemInPlaylistWhereUniqueInput | ProblemInPlaylistWhereUniqueInput[]
    update?: ProblemInPlaylistUpdateWithWhereUniqueWithoutProblemInput | ProblemInPlaylistUpdateWithWhereUniqueWithoutProblemInput[]
    updateMany?: ProblemInPlaylistUpdateManyWithWhereWithoutProblemInput | ProblemInPlaylistUpdateManyWithWhereWithoutProblemInput[]
    deleteMany?: ProblemInPlaylistScalarWhereInput | ProblemInPlaylistScalarWhereInput[]
  }

  export type ProblemInSheetUpdateManyWithoutProblemNestedInput = {
    create?: XOR<ProblemInSheetCreateWithoutProblemInput, ProblemInSheetUncheckedCreateWithoutProblemInput> | ProblemInSheetCreateWithoutProblemInput[] | ProblemInSheetUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: ProblemInSheetCreateOrConnectWithoutProblemInput | ProblemInSheetCreateOrConnectWithoutProblemInput[]
    upsert?: ProblemInSheetUpsertWithWhereUniqueWithoutProblemInput | ProblemInSheetUpsertWithWhereUniqueWithoutProblemInput[]
    createMany?: ProblemInSheetCreateManyProblemInputEnvelope
    set?: ProblemInSheetWhereUniqueInput | ProblemInSheetWhereUniqueInput[]
    disconnect?: ProblemInSheetWhereUniqueInput | ProblemInSheetWhereUniqueInput[]
    delete?: ProblemInSheetWhereUniqueInput | ProblemInSheetWhereUniqueInput[]
    connect?: ProblemInSheetWhereUniqueInput | ProblemInSheetWhereUniqueInput[]
    update?: ProblemInSheetUpdateWithWhereUniqueWithoutProblemInput | ProblemInSheetUpdateWithWhereUniqueWithoutProblemInput[]
    updateMany?: ProblemInSheetUpdateManyWithWhereWithoutProblemInput | ProblemInSheetUpdateManyWithWhereWithoutProblemInput[]
    deleteMany?: ProblemInSheetScalarWhereInput | ProblemInSheetScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutPrblemsNestedInput = {
    create?: XOR<UserCreateWithoutPrblemsInput, UserUncheckedCreateWithoutPrblemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPrblemsInput
    upsert?: UserUpsertWithoutPrblemsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPrblemsInput, UserUpdateWithoutPrblemsInput>, UserUncheckedUpdateWithoutPrblemsInput>
  }

  export type SubmissionUncheckedUpdateManyWithoutProblemNestedInput = {
    create?: XOR<SubmissionCreateWithoutProblemInput, SubmissionUncheckedCreateWithoutProblemInput> | SubmissionCreateWithoutProblemInput[] | SubmissionUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutProblemInput | SubmissionCreateOrConnectWithoutProblemInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutProblemInput | SubmissionUpsertWithWhereUniqueWithoutProblemInput[]
    createMany?: SubmissionCreateManyProblemInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutProblemInput | SubmissionUpdateWithWhereUniqueWithoutProblemInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutProblemInput | SubmissionUpdateManyWithWhereWithoutProblemInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type ProblemSolvedUncheckedUpdateManyWithoutProblemNestedInput = {
    create?: XOR<ProblemSolvedCreateWithoutProblemInput, ProblemSolvedUncheckedCreateWithoutProblemInput> | ProblemSolvedCreateWithoutProblemInput[] | ProblemSolvedUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: ProblemSolvedCreateOrConnectWithoutProblemInput | ProblemSolvedCreateOrConnectWithoutProblemInput[]
    upsert?: ProblemSolvedUpsertWithWhereUniqueWithoutProblemInput | ProblemSolvedUpsertWithWhereUniqueWithoutProblemInput[]
    createMany?: ProblemSolvedCreateManyProblemInputEnvelope
    set?: ProblemSolvedWhereUniqueInput | ProblemSolvedWhereUniqueInput[]
    disconnect?: ProblemSolvedWhereUniqueInput | ProblemSolvedWhereUniqueInput[]
    delete?: ProblemSolvedWhereUniqueInput | ProblemSolvedWhereUniqueInput[]
    connect?: ProblemSolvedWhereUniqueInput | ProblemSolvedWhereUniqueInput[]
    update?: ProblemSolvedUpdateWithWhereUniqueWithoutProblemInput | ProblemSolvedUpdateWithWhereUniqueWithoutProblemInput[]
    updateMany?: ProblemSolvedUpdateManyWithWhereWithoutProblemInput | ProblemSolvedUpdateManyWithWhereWithoutProblemInput[]
    deleteMany?: ProblemSolvedScalarWhereInput | ProblemSolvedScalarWhereInput[]
  }

  export type ProblemInPlaylistUncheckedUpdateManyWithoutProblemNestedInput = {
    create?: XOR<ProblemInPlaylistCreateWithoutProblemInput, ProblemInPlaylistUncheckedCreateWithoutProblemInput> | ProblemInPlaylistCreateWithoutProblemInput[] | ProblemInPlaylistUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: ProblemInPlaylistCreateOrConnectWithoutProblemInput | ProblemInPlaylistCreateOrConnectWithoutProblemInput[]
    upsert?: ProblemInPlaylistUpsertWithWhereUniqueWithoutProblemInput | ProblemInPlaylistUpsertWithWhereUniqueWithoutProblemInput[]
    createMany?: ProblemInPlaylistCreateManyProblemInputEnvelope
    set?: ProblemInPlaylistWhereUniqueInput | ProblemInPlaylistWhereUniqueInput[]
    disconnect?: ProblemInPlaylistWhereUniqueInput | ProblemInPlaylistWhereUniqueInput[]
    delete?: ProblemInPlaylistWhereUniqueInput | ProblemInPlaylistWhereUniqueInput[]
    connect?: ProblemInPlaylistWhereUniqueInput | ProblemInPlaylistWhereUniqueInput[]
    update?: ProblemInPlaylistUpdateWithWhereUniqueWithoutProblemInput | ProblemInPlaylistUpdateWithWhereUniqueWithoutProblemInput[]
    updateMany?: ProblemInPlaylistUpdateManyWithWhereWithoutProblemInput | ProblemInPlaylistUpdateManyWithWhereWithoutProblemInput[]
    deleteMany?: ProblemInPlaylistScalarWhereInput | ProblemInPlaylistScalarWhereInput[]
  }

  export type ProblemInSheetUncheckedUpdateManyWithoutProblemNestedInput = {
    create?: XOR<ProblemInSheetCreateWithoutProblemInput, ProblemInSheetUncheckedCreateWithoutProblemInput> | ProblemInSheetCreateWithoutProblemInput[] | ProblemInSheetUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: ProblemInSheetCreateOrConnectWithoutProblemInput | ProblemInSheetCreateOrConnectWithoutProblemInput[]
    upsert?: ProblemInSheetUpsertWithWhereUniqueWithoutProblemInput | ProblemInSheetUpsertWithWhereUniqueWithoutProblemInput[]
    createMany?: ProblemInSheetCreateManyProblemInputEnvelope
    set?: ProblemInSheetWhereUniqueInput | ProblemInSheetWhereUniqueInput[]
    disconnect?: ProblemInSheetWhereUniqueInput | ProblemInSheetWhereUniqueInput[]
    delete?: ProblemInSheetWhereUniqueInput | ProblemInSheetWhereUniqueInput[]
    connect?: ProblemInSheetWhereUniqueInput | ProblemInSheetWhereUniqueInput[]
    update?: ProblemInSheetUpdateWithWhereUniqueWithoutProblemInput | ProblemInSheetUpdateWithWhereUniqueWithoutProblemInput[]
    updateMany?: ProblemInSheetUpdateManyWithWhereWithoutProblemInput | ProblemInSheetUpdateManyWithWhereWithoutProblemInput[]
    deleteMany?: ProblemInSheetScalarWhereInput | ProblemInSheetScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSubmissionsInput = {
    create?: XOR<UserCreateWithoutSubmissionsInput, UserUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubmissionsInput
    connect?: UserWhereUniqueInput
  }

  export type ProblemCreateNestedOneWithoutSubmissionInput = {
    create?: XOR<ProblemCreateWithoutSubmissionInput, ProblemUncheckedCreateWithoutSubmissionInput>
    connectOrCreate?: ProblemCreateOrConnectWithoutSubmissionInput
    connect?: ProblemWhereUniqueInput
  }

  export type TestCaseResultCreateNestedManyWithoutSubmissionInput = {
    create?: XOR<TestCaseResultCreateWithoutSubmissionInput, TestCaseResultUncheckedCreateWithoutSubmissionInput> | TestCaseResultCreateWithoutSubmissionInput[] | TestCaseResultUncheckedCreateWithoutSubmissionInput[]
    connectOrCreate?: TestCaseResultCreateOrConnectWithoutSubmissionInput | TestCaseResultCreateOrConnectWithoutSubmissionInput[]
    createMany?: TestCaseResultCreateManySubmissionInputEnvelope
    connect?: TestCaseResultWhereUniqueInput | TestCaseResultWhereUniqueInput[]
  }

  export type TestCaseResultUncheckedCreateNestedManyWithoutSubmissionInput = {
    create?: XOR<TestCaseResultCreateWithoutSubmissionInput, TestCaseResultUncheckedCreateWithoutSubmissionInput> | TestCaseResultCreateWithoutSubmissionInput[] | TestCaseResultUncheckedCreateWithoutSubmissionInput[]
    connectOrCreate?: TestCaseResultCreateOrConnectWithoutSubmissionInput | TestCaseResultCreateOrConnectWithoutSubmissionInput[]
    createMany?: TestCaseResultCreateManySubmissionInputEnvelope
    connect?: TestCaseResultWhereUniqueInput | TestCaseResultWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutSubmissionsNestedInput = {
    create?: XOR<UserCreateWithoutSubmissionsInput, UserUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubmissionsInput
    upsert?: UserUpsertWithoutSubmissionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSubmissionsInput, UserUpdateWithoutSubmissionsInput>, UserUncheckedUpdateWithoutSubmissionsInput>
  }

  export type ProblemUpdateOneRequiredWithoutSubmissionNestedInput = {
    create?: XOR<ProblemCreateWithoutSubmissionInput, ProblemUncheckedCreateWithoutSubmissionInput>
    connectOrCreate?: ProblemCreateOrConnectWithoutSubmissionInput
    upsert?: ProblemUpsertWithoutSubmissionInput
    connect?: ProblemWhereUniqueInput
    update?: XOR<XOR<ProblemUpdateToOneWithWhereWithoutSubmissionInput, ProblemUpdateWithoutSubmissionInput>, ProblemUncheckedUpdateWithoutSubmissionInput>
  }

  export type TestCaseResultUpdateManyWithoutSubmissionNestedInput = {
    create?: XOR<TestCaseResultCreateWithoutSubmissionInput, TestCaseResultUncheckedCreateWithoutSubmissionInput> | TestCaseResultCreateWithoutSubmissionInput[] | TestCaseResultUncheckedCreateWithoutSubmissionInput[]
    connectOrCreate?: TestCaseResultCreateOrConnectWithoutSubmissionInput | TestCaseResultCreateOrConnectWithoutSubmissionInput[]
    upsert?: TestCaseResultUpsertWithWhereUniqueWithoutSubmissionInput | TestCaseResultUpsertWithWhereUniqueWithoutSubmissionInput[]
    createMany?: TestCaseResultCreateManySubmissionInputEnvelope
    set?: TestCaseResultWhereUniqueInput | TestCaseResultWhereUniqueInput[]
    disconnect?: TestCaseResultWhereUniqueInput | TestCaseResultWhereUniqueInput[]
    delete?: TestCaseResultWhereUniqueInput | TestCaseResultWhereUniqueInput[]
    connect?: TestCaseResultWhereUniqueInput | TestCaseResultWhereUniqueInput[]
    update?: TestCaseResultUpdateWithWhereUniqueWithoutSubmissionInput | TestCaseResultUpdateWithWhereUniqueWithoutSubmissionInput[]
    updateMany?: TestCaseResultUpdateManyWithWhereWithoutSubmissionInput | TestCaseResultUpdateManyWithWhereWithoutSubmissionInput[]
    deleteMany?: TestCaseResultScalarWhereInput | TestCaseResultScalarWhereInput[]
  }

  export type TestCaseResultUncheckedUpdateManyWithoutSubmissionNestedInput = {
    create?: XOR<TestCaseResultCreateWithoutSubmissionInput, TestCaseResultUncheckedCreateWithoutSubmissionInput> | TestCaseResultCreateWithoutSubmissionInput[] | TestCaseResultUncheckedCreateWithoutSubmissionInput[]
    connectOrCreate?: TestCaseResultCreateOrConnectWithoutSubmissionInput | TestCaseResultCreateOrConnectWithoutSubmissionInput[]
    upsert?: TestCaseResultUpsertWithWhereUniqueWithoutSubmissionInput | TestCaseResultUpsertWithWhereUniqueWithoutSubmissionInput[]
    createMany?: TestCaseResultCreateManySubmissionInputEnvelope
    set?: TestCaseResultWhereUniqueInput | TestCaseResultWhereUniqueInput[]
    disconnect?: TestCaseResultWhereUniqueInput | TestCaseResultWhereUniqueInput[]
    delete?: TestCaseResultWhereUniqueInput | TestCaseResultWhereUniqueInput[]
    connect?: TestCaseResultWhereUniqueInput | TestCaseResultWhereUniqueInput[]
    update?: TestCaseResultUpdateWithWhereUniqueWithoutSubmissionInput | TestCaseResultUpdateWithWhereUniqueWithoutSubmissionInput[]
    updateMany?: TestCaseResultUpdateManyWithWhereWithoutSubmissionInput | TestCaseResultUpdateManyWithWhereWithoutSubmissionInput[]
    deleteMany?: TestCaseResultScalarWhereInput | TestCaseResultScalarWhereInput[]
  }

  export type SubmissionCreateNestedOneWithoutTestCasesInput = {
    create?: XOR<SubmissionCreateWithoutTestCasesInput, SubmissionUncheckedCreateWithoutTestCasesInput>
    connectOrCreate?: SubmissionCreateOrConnectWithoutTestCasesInput
    connect?: SubmissionWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SubmissionUpdateOneRequiredWithoutTestCasesNestedInput = {
    create?: XOR<SubmissionCreateWithoutTestCasesInput, SubmissionUncheckedCreateWithoutTestCasesInput>
    connectOrCreate?: SubmissionCreateOrConnectWithoutTestCasesInput
    upsert?: SubmissionUpsertWithoutTestCasesInput
    connect?: SubmissionWhereUniqueInput
    update?: XOR<XOR<SubmissionUpdateToOneWithWhereWithoutTestCasesInput, SubmissionUpdateWithoutTestCasesInput>, SubmissionUncheckedUpdateWithoutTestCasesInput>
  }

  export type UserCreateNestedOneWithoutProblemSolvedInput = {
    create?: XOR<UserCreateWithoutProblemSolvedInput, UserUncheckedCreateWithoutProblemSolvedInput>
    connectOrCreate?: UserCreateOrConnectWithoutProblemSolvedInput
    connect?: UserWhereUniqueInput
  }

  export type ProblemCreateNestedOneWithoutSolvedByInput = {
    create?: XOR<ProblemCreateWithoutSolvedByInput, ProblemUncheckedCreateWithoutSolvedByInput>
    connectOrCreate?: ProblemCreateOrConnectWithoutSolvedByInput
    connect?: ProblemWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutProblemSolvedNestedInput = {
    create?: XOR<UserCreateWithoutProblemSolvedInput, UserUncheckedCreateWithoutProblemSolvedInput>
    connectOrCreate?: UserCreateOrConnectWithoutProblemSolvedInput
    upsert?: UserUpsertWithoutProblemSolvedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProblemSolvedInput, UserUpdateWithoutProblemSolvedInput>, UserUncheckedUpdateWithoutProblemSolvedInput>
  }

  export type ProblemUpdateOneRequiredWithoutSolvedByNestedInput = {
    create?: XOR<ProblemCreateWithoutSolvedByInput, ProblemUncheckedCreateWithoutSolvedByInput>
    connectOrCreate?: ProblemCreateOrConnectWithoutSolvedByInput
    upsert?: ProblemUpsertWithoutSolvedByInput
    connect?: ProblemWhereUniqueInput
    update?: XOR<XOR<ProblemUpdateToOneWithWhereWithoutSolvedByInput, ProblemUpdateWithoutSolvedByInput>, ProblemUncheckedUpdateWithoutSolvedByInput>
  }

  export type ProblemInPlaylistCreateNestedManyWithoutPlaylistInput = {
    create?: XOR<ProblemInPlaylistCreateWithoutPlaylistInput, ProblemInPlaylistUncheckedCreateWithoutPlaylistInput> | ProblemInPlaylistCreateWithoutPlaylistInput[] | ProblemInPlaylistUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: ProblemInPlaylistCreateOrConnectWithoutPlaylistInput | ProblemInPlaylistCreateOrConnectWithoutPlaylistInput[]
    createMany?: ProblemInPlaylistCreateManyPlaylistInputEnvelope
    connect?: ProblemInPlaylistWhereUniqueInput | ProblemInPlaylistWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutPlaylistsInput = {
    create?: XOR<UserCreateWithoutPlaylistsInput, UserUncheckedCreateWithoutPlaylistsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPlaylistsInput
    connect?: UserWhereUniqueInput
  }

  export type ProblemInPlaylistUncheckedCreateNestedManyWithoutPlaylistInput = {
    create?: XOR<ProblemInPlaylistCreateWithoutPlaylistInput, ProblemInPlaylistUncheckedCreateWithoutPlaylistInput> | ProblemInPlaylistCreateWithoutPlaylistInput[] | ProblemInPlaylistUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: ProblemInPlaylistCreateOrConnectWithoutPlaylistInput | ProblemInPlaylistCreateOrConnectWithoutPlaylistInput[]
    createMany?: ProblemInPlaylistCreateManyPlaylistInputEnvelope
    connect?: ProblemInPlaylistWhereUniqueInput | ProblemInPlaylistWhereUniqueInput[]
  }

  export type ProblemInPlaylistUpdateManyWithoutPlaylistNestedInput = {
    create?: XOR<ProblemInPlaylistCreateWithoutPlaylistInput, ProblemInPlaylistUncheckedCreateWithoutPlaylistInput> | ProblemInPlaylistCreateWithoutPlaylistInput[] | ProblemInPlaylistUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: ProblemInPlaylistCreateOrConnectWithoutPlaylistInput | ProblemInPlaylistCreateOrConnectWithoutPlaylistInput[]
    upsert?: ProblemInPlaylistUpsertWithWhereUniqueWithoutPlaylistInput | ProblemInPlaylistUpsertWithWhereUniqueWithoutPlaylistInput[]
    createMany?: ProblemInPlaylistCreateManyPlaylistInputEnvelope
    set?: ProblemInPlaylistWhereUniqueInput | ProblemInPlaylistWhereUniqueInput[]
    disconnect?: ProblemInPlaylistWhereUniqueInput | ProblemInPlaylistWhereUniqueInput[]
    delete?: ProblemInPlaylistWhereUniqueInput | ProblemInPlaylistWhereUniqueInput[]
    connect?: ProblemInPlaylistWhereUniqueInput | ProblemInPlaylistWhereUniqueInput[]
    update?: ProblemInPlaylistUpdateWithWhereUniqueWithoutPlaylistInput | ProblemInPlaylistUpdateWithWhereUniqueWithoutPlaylistInput[]
    updateMany?: ProblemInPlaylistUpdateManyWithWhereWithoutPlaylistInput | ProblemInPlaylistUpdateManyWithWhereWithoutPlaylistInput[]
    deleteMany?: ProblemInPlaylistScalarWhereInput | ProblemInPlaylistScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutPlaylistsNestedInput = {
    create?: XOR<UserCreateWithoutPlaylistsInput, UserUncheckedCreateWithoutPlaylistsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPlaylistsInput
    upsert?: UserUpsertWithoutPlaylistsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPlaylistsInput, UserUpdateWithoutPlaylistsInput>, UserUncheckedUpdateWithoutPlaylistsInput>
  }

  export type ProblemInPlaylistUncheckedUpdateManyWithoutPlaylistNestedInput = {
    create?: XOR<ProblemInPlaylistCreateWithoutPlaylistInput, ProblemInPlaylistUncheckedCreateWithoutPlaylistInput> | ProblemInPlaylistCreateWithoutPlaylistInput[] | ProblemInPlaylistUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: ProblemInPlaylistCreateOrConnectWithoutPlaylistInput | ProblemInPlaylistCreateOrConnectWithoutPlaylistInput[]
    upsert?: ProblemInPlaylistUpsertWithWhereUniqueWithoutPlaylistInput | ProblemInPlaylistUpsertWithWhereUniqueWithoutPlaylistInput[]
    createMany?: ProblemInPlaylistCreateManyPlaylistInputEnvelope
    set?: ProblemInPlaylistWhereUniqueInput | ProblemInPlaylistWhereUniqueInput[]
    disconnect?: ProblemInPlaylistWhereUniqueInput | ProblemInPlaylistWhereUniqueInput[]
    delete?: ProblemInPlaylistWhereUniqueInput | ProblemInPlaylistWhereUniqueInput[]
    connect?: ProblemInPlaylistWhereUniqueInput | ProblemInPlaylistWhereUniqueInput[]
    update?: ProblemInPlaylistUpdateWithWhereUniqueWithoutPlaylistInput | ProblemInPlaylistUpdateWithWhereUniqueWithoutPlaylistInput[]
    updateMany?: ProblemInPlaylistUpdateManyWithWhereWithoutPlaylistInput | ProblemInPlaylistUpdateManyWithWhereWithoutPlaylistInput[]
    deleteMany?: ProblemInPlaylistScalarWhereInput | ProblemInPlaylistScalarWhereInput[]
  }

  export type PlaylistCreateNestedOneWithoutProblemsInput = {
    create?: XOR<PlaylistCreateWithoutProblemsInput, PlaylistUncheckedCreateWithoutProblemsInput>
    connectOrCreate?: PlaylistCreateOrConnectWithoutProblemsInput
    connect?: PlaylistWhereUniqueInput
  }

  export type ProblemCreateNestedOneWithoutProblemsPlaylistInput = {
    create?: XOR<ProblemCreateWithoutProblemsPlaylistInput, ProblemUncheckedCreateWithoutProblemsPlaylistInput>
    connectOrCreate?: ProblemCreateOrConnectWithoutProblemsPlaylistInput
    connect?: ProblemWhereUniqueInput
  }

  export type PlaylistUpdateOneRequiredWithoutProblemsNestedInput = {
    create?: XOR<PlaylistCreateWithoutProblemsInput, PlaylistUncheckedCreateWithoutProblemsInput>
    connectOrCreate?: PlaylistCreateOrConnectWithoutProblemsInput
    upsert?: PlaylistUpsertWithoutProblemsInput
    connect?: PlaylistWhereUniqueInput
    update?: XOR<XOR<PlaylistUpdateToOneWithWhereWithoutProblemsInput, PlaylistUpdateWithoutProblemsInput>, PlaylistUncheckedUpdateWithoutProblemsInput>
  }

  export type ProblemUpdateOneRequiredWithoutProblemsPlaylistNestedInput = {
    create?: XOR<ProblemCreateWithoutProblemsPlaylistInput, ProblemUncheckedCreateWithoutProblemsPlaylistInput>
    connectOrCreate?: ProblemCreateOrConnectWithoutProblemsPlaylistInput
    upsert?: ProblemUpsertWithoutProblemsPlaylistInput
    connect?: ProblemWhereUniqueInput
    update?: XOR<XOR<ProblemUpdateToOneWithWhereWithoutProblemsPlaylistInput, ProblemUpdateWithoutProblemsPlaylistInput>, ProblemUncheckedUpdateWithoutProblemsPlaylistInput>
  }

  export type ProblemInSheetCreateNestedManyWithoutSheetInput = {
    create?: XOR<ProblemInSheetCreateWithoutSheetInput, ProblemInSheetUncheckedCreateWithoutSheetInput> | ProblemInSheetCreateWithoutSheetInput[] | ProblemInSheetUncheckedCreateWithoutSheetInput[]
    connectOrCreate?: ProblemInSheetCreateOrConnectWithoutSheetInput | ProblemInSheetCreateOrConnectWithoutSheetInput[]
    createMany?: ProblemInSheetCreateManySheetInputEnvelope
    connect?: ProblemInSheetWhereUniqueInput | ProblemInSheetWhereUniqueInput[]
  }

  export type OrderCreateNestedManyWithoutSheetInput = {
    create?: XOR<OrderCreateWithoutSheetInput, OrderUncheckedCreateWithoutSheetInput> | OrderCreateWithoutSheetInput[] | OrderUncheckedCreateWithoutSheetInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutSheetInput | OrderCreateOrConnectWithoutSheetInput[]
    createMany?: OrderCreateManySheetInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutSheetInput = {
    create?: XOR<UserCreateWithoutSheetInput, UserUncheckedCreateWithoutSheetInput>
    connectOrCreate?: UserCreateOrConnectWithoutSheetInput
    connect?: UserWhereUniqueInput
  }

  export type ProblemInSheetUncheckedCreateNestedManyWithoutSheetInput = {
    create?: XOR<ProblemInSheetCreateWithoutSheetInput, ProblemInSheetUncheckedCreateWithoutSheetInput> | ProblemInSheetCreateWithoutSheetInput[] | ProblemInSheetUncheckedCreateWithoutSheetInput[]
    connectOrCreate?: ProblemInSheetCreateOrConnectWithoutSheetInput | ProblemInSheetCreateOrConnectWithoutSheetInput[]
    createMany?: ProblemInSheetCreateManySheetInputEnvelope
    connect?: ProblemInSheetWhereUniqueInput | ProblemInSheetWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutSheetInput = {
    create?: XOR<OrderCreateWithoutSheetInput, OrderUncheckedCreateWithoutSheetInput> | OrderCreateWithoutSheetInput[] | OrderUncheckedCreateWithoutSheetInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutSheetInput | OrderCreateOrConnectWithoutSheetInput[]
    createMany?: OrderCreateManySheetInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type ProblemInSheetUpdateManyWithoutSheetNestedInput = {
    create?: XOR<ProblemInSheetCreateWithoutSheetInput, ProblemInSheetUncheckedCreateWithoutSheetInput> | ProblemInSheetCreateWithoutSheetInput[] | ProblemInSheetUncheckedCreateWithoutSheetInput[]
    connectOrCreate?: ProblemInSheetCreateOrConnectWithoutSheetInput | ProblemInSheetCreateOrConnectWithoutSheetInput[]
    upsert?: ProblemInSheetUpsertWithWhereUniqueWithoutSheetInput | ProblemInSheetUpsertWithWhereUniqueWithoutSheetInput[]
    createMany?: ProblemInSheetCreateManySheetInputEnvelope
    set?: ProblemInSheetWhereUniqueInput | ProblemInSheetWhereUniqueInput[]
    disconnect?: ProblemInSheetWhereUniqueInput | ProblemInSheetWhereUniqueInput[]
    delete?: ProblemInSheetWhereUniqueInput | ProblemInSheetWhereUniqueInput[]
    connect?: ProblemInSheetWhereUniqueInput | ProblemInSheetWhereUniqueInput[]
    update?: ProblemInSheetUpdateWithWhereUniqueWithoutSheetInput | ProblemInSheetUpdateWithWhereUniqueWithoutSheetInput[]
    updateMany?: ProblemInSheetUpdateManyWithWhereWithoutSheetInput | ProblemInSheetUpdateManyWithWhereWithoutSheetInput[]
    deleteMany?: ProblemInSheetScalarWhereInput | ProblemInSheetScalarWhereInput[]
  }

  export type OrderUpdateManyWithoutSheetNestedInput = {
    create?: XOR<OrderCreateWithoutSheetInput, OrderUncheckedCreateWithoutSheetInput> | OrderCreateWithoutSheetInput[] | OrderUncheckedCreateWithoutSheetInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutSheetInput | OrderCreateOrConnectWithoutSheetInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutSheetInput | OrderUpsertWithWhereUniqueWithoutSheetInput[]
    createMany?: OrderCreateManySheetInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutSheetInput | OrderUpdateWithWhereUniqueWithoutSheetInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutSheetInput | OrderUpdateManyWithWhereWithoutSheetInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutSheetNestedInput = {
    create?: XOR<UserCreateWithoutSheetInput, UserUncheckedCreateWithoutSheetInput>
    connectOrCreate?: UserCreateOrConnectWithoutSheetInput
    upsert?: UserUpsertWithoutSheetInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSheetInput, UserUpdateWithoutSheetInput>, UserUncheckedUpdateWithoutSheetInput>
  }

  export type ProblemInSheetUncheckedUpdateManyWithoutSheetNestedInput = {
    create?: XOR<ProblemInSheetCreateWithoutSheetInput, ProblemInSheetUncheckedCreateWithoutSheetInput> | ProblemInSheetCreateWithoutSheetInput[] | ProblemInSheetUncheckedCreateWithoutSheetInput[]
    connectOrCreate?: ProblemInSheetCreateOrConnectWithoutSheetInput | ProblemInSheetCreateOrConnectWithoutSheetInput[]
    upsert?: ProblemInSheetUpsertWithWhereUniqueWithoutSheetInput | ProblemInSheetUpsertWithWhereUniqueWithoutSheetInput[]
    createMany?: ProblemInSheetCreateManySheetInputEnvelope
    set?: ProblemInSheetWhereUniqueInput | ProblemInSheetWhereUniqueInput[]
    disconnect?: ProblemInSheetWhereUniqueInput | ProblemInSheetWhereUniqueInput[]
    delete?: ProblemInSheetWhereUniqueInput | ProblemInSheetWhereUniqueInput[]
    connect?: ProblemInSheetWhereUniqueInput | ProblemInSheetWhereUniqueInput[]
    update?: ProblemInSheetUpdateWithWhereUniqueWithoutSheetInput | ProblemInSheetUpdateWithWhereUniqueWithoutSheetInput[]
    updateMany?: ProblemInSheetUpdateManyWithWhereWithoutSheetInput | ProblemInSheetUpdateManyWithWhereWithoutSheetInput[]
    deleteMany?: ProblemInSheetScalarWhereInput | ProblemInSheetScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutSheetNestedInput = {
    create?: XOR<OrderCreateWithoutSheetInput, OrderUncheckedCreateWithoutSheetInput> | OrderCreateWithoutSheetInput[] | OrderUncheckedCreateWithoutSheetInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutSheetInput | OrderCreateOrConnectWithoutSheetInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutSheetInput | OrderUpsertWithWhereUniqueWithoutSheetInput[]
    createMany?: OrderCreateManySheetInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutSheetInput | OrderUpdateWithWhereUniqueWithoutSheetInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutSheetInput | OrderUpdateManyWithWhereWithoutSheetInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type SheetCreateNestedOneWithoutProblemsInput = {
    create?: XOR<SheetCreateWithoutProblemsInput, SheetUncheckedCreateWithoutProblemsInput>
    connectOrCreate?: SheetCreateOrConnectWithoutProblemsInput
    connect?: SheetWhereUniqueInput
  }

  export type ProblemCreateNestedOneWithoutProblemsSheetInput = {
    create?: XOR<ProblemCreateWithoutProblemsSheetInput, ProblemUncheckedCreateWithoutProblemsSheetInput>
    connectOrCreate?: ProblemCreateOrConnectWithoutProblemsSheetInput
    connect?: ProblemWhereUniqueInput
  }

  export type SheetUpdateOneRequiredWithoutProblemsNestedInput = {
    create?: XOR<SheetCreateWithoutProblemsInput, SheetUncheckedCreateWithoutProblemsInput>
    connectOrCreate?: SheetCreateOrConnectWithoutProblemsInput
    upsert?: SheetUpsertWithoutProblemsInput
    connect?: SheetWhereUniqueInput
    update?: XOR<XOR<SheetUpdateToOneWithWhereWithoutProblemsInput, SheetUpdateWithoutProblemsInput>, SheetUncheckedUpdateWithoutProblemsInput>
  }

  export type ProblemUpdateOneRequiredWithoutProblemsSheetNestedInput = {
    create?: XOR<ProblemCreateWithoutProblemsSheetInput, ProblemUncheckedCreateWithoutProblemsSheetInput>
    connectOrCreate?: ProblemCreateOrConnectWithoutProblemsSheetInput
    upsert?: ProblemUpsertWithoutProblemsSheetInput
    connect?: ProblemWhereUniqueInput
    update?: XOR<XOR<ProblemUpdateToOneWithWhereWithoutProblemsSheetInput, ProblemUpdateWithoutProblemsSheetInput>, ProblemUncheckedUpdateWithoutProblemsSheetInput>
  }

  export type UserCreateNestedOneWithoutOrdersInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    connect?: UserWhereUniqueInput
  }

  export type SheetCreateNestedOneWithoutOrdersInput = {
    create?: XOR<SheetCreateWithoutOrdersInput, SheetUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: SheetCreateOrConnectWithoutOrdersInput
    connect?: SheetWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    upsert?: UserUpsertWithoutOrdersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrdersInput, UserUpdateWithoutOrdersInput>, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type SheetUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<SheetCreateWithoutOrdersInput, SheetUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: SheetCreateOrConnectWithoutOrdersInput
    upsert?: SheetUpsertWithoutOrdersInput
    connect?: SheetWhereUniqueInput
    update?: XOR<XOR<SheetUpdateToOneWithWhereWithoutOrdersInput, SheetUpdateWithoutOrdersInput>, SheetUncheckedUpdateWithoutOrdersInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumDifficultyFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyFilter<$PrismaModel> | $Enums.Difficulty
  }

  export type NestedEnumDifficultyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyWithAggregatesFilter<$PrismaModel> | $Enums.Difficulty
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDifficultyFilter<$PrismaModel>
    _max?: NestedEnumDifficultyFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ProblemCreateWithoutUserInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.Difficulty
    tags?: ProblemCreatetagsInput | string[]
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: string | null
    editorial?: string | null
    testcases: JsonNullValueInput | InputJsonValue
    codeSnippets: JsonNullValueInput | InputJsonValue
    referenceSolutions: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    submission?: SubmissionCreateNestedManyWithoutProblemInput
    solvedBy?: ProblemSolvedCreateNestedManyWithoutProblemInput
    problemsPlaylist?: ProblemInPlaylistCreateNestedManyWithoutProblemInput
    problemsSheet?: ProblemInSheetCreateNestedManyWithoutProblemInput
  }

  export type ProblemUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.Difficulty
    tags?: ProblemCreatetagsInput | string[]
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: string | null
    editorial?: string | null
    testcases: JsonNullValueInput | InputJsonValue
    codeSnippets: JsonNullValueInput | InputJsonValue
    referenceSolutions: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    submission?: SubmissionUncheckedCreateNestedManyWithoutProblemInput
    solvedBy?: ProblemSolvedUncheckedCreateNestedManyWithoutProblemInput
    problemsPlaylist?: ProblemInPlaylistUncheckedCreateNestedManyWithoutProblemInput
    problemsSheet?: ProblemInSheetUncheckedCreateNestedManyWithoutProblemInput
  }

  export type ProblemCreateOrConnectWithoutUserInput = {
    where: ProblemWhereUniqueInput
    create: XOR<ProblemCreateWithoutUserInput, ProblemUncheckedCreateWithoutUserInput>
  }

  export type ProblemCreateManyUserInputEnvelope = {
    data: ProblemCreateManyUserInput | ProblemCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SubmissionCreateWithoutUserInput = {
    id?: string
    sourceCode: JsonNullValueInput | InputJsonValue
    language: string
    stdin?: string | null
    stdout?: string | null
    stderr?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    problem: ProblemCreateNestedOneWithoutSubmissionInput
    testCases?: TestCaseResultCreateNestedManyWithoutSubmissionInput
  }

  export type SubmissionUncheckedCreateWithoutUserInput = {
    id?: string
    problemId: string
    sourceCode: JsonNullValueInput | InputJsonValue
    language: string
    stdin?: string | null
    stdout?: string | null
    stderr?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    testCases?: TestCaseResultUncheckedCreateNestedManyWithoutSubmissionInput
  }

  export type SubmissionCreateOrConnectWithoutUserInput = {
    where: SubmissionWhereUniqueInput
    create: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput>
  }

  export type SubmissionCreateManyUserInputEnvelope = {
    data: SubmissionCreateManyUserInput | SubmissionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProblemSolvedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    problem: ProblemCreateNestedOneWithoutSolvedByInput
  }

  export type ProblemSolvedUncheckedCreateWithoutUserInput = {
    id?: string
    problemId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProblemSolvedCreateOrConnectWithoutUserInput = {
    where: ProblemSolvedWhereUniqueInput
    create: XOR<ProblemSolvedCreateWithoutUserInput, ProblemSolvedUncheckedCreateWithoutUserInput>
  }

  export type ProblemSolvedCreateManyUserInputEnvelope = {
    data: ProblemSolvedCreateManyUserInput | ProblemSolvedCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PlaylistCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: ProblemInPlaylistCreateNestedManyWithoutPlaylistInput
  }

  export type PlaylistUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: ProblemInPlaylistUncheckedCreateNestedManyWithoutPlaylistInput
  }

  export type PlaylistCreateOrConnectWithoutUserInput = {
    where: PlaylistWhereUniqueInput
    create: XOR<PlaylistCreateWithoutUserInput, PlaylistUncheckedCreateWithoutUserInput>
  }

  export type PlaylistCreateManyUserInputEnvelope = {
    data: PlaylistCreateManyUserInput | PlaylistCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SheetCreateWithoutUserInput = {
    id?: string
    title: string
    company: string
    description?: string | null
    price?: number
    isPaid?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: ProblemInSheetCreateNestedManyWithoutSheetInput
    orders?: OrderCreateNestedManyWithoutSheetInput
  }

  export type SheetUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    company: string
    description?: string | null
    price?: number
    isPaid?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: ProblemInSheetUncheckedCreateNestedManyWithoutSheetInput
    orders?: OrderUncheckedCreateNestedManyWithoutSheetInput
  }

  export type SheetCreateOrConnectWithoutUserInput = {
    where: SheetWhereUniqueInput
    create: XOR<SheetCreateWithoutUserInput, SheetUncheckedCreateWithoutUserInput>
  }

  export type SheetCreateManyUserInputEnvelope = {
    data: SheetCreateManyUserInput | SheetCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutUserInput = {
    id?: string
    razorpayOrderId: string
    razorpayPaymentId?: string | null
    razorpaySignature?: string | null
    status: string
    amount: number
    createdAt?: Date | string
    sheet: SheetCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateWithoutUserInput = {
    id?: string
    sheetId: string
    razorpayOrderId: string
    razorpayPaymentId?: string | null
    razorpaySignature?: string | null
    status: string
    amount: number
    createdAt?: Date | string
  }

  export type OrderCreateOrConnectWithoutUserInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderCreateManyUserInputEnvelope = {
    data: OrderCreateManyUserInput | OrderCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProblemUpsertWithWhereUniqueWithoutUserInput = {
    where: ProblemWhereUniqueInput
    update: XOR<ProblemUpdateWithoutUserInput, ProblemUncheckedUpdateWithoutUserInput>
    create: XOR<ProblemCreateWithoutUserInput, ProblemUncheckedCreateWithoutUserInput>
  }

  export type ProblemUpdateWithWhereUniqueWithoutUserInput = {
    where: ProblemWhereUniqueInput
    data: XOR<ProblemUpdateWithoutUserInput, ProblemUncheckedUpdateWithoutUserInput>
  }

  export type ProblemUpdateManyWithWhereWithoutUserInput = {
    where: ProblemScalarWhereInput
    data: XOR<ProblemUpdateManyMutationInput, ProblemUncheckedUpdateManyWithoutUserInput>
  }

  export type ProblemScalarWhereInput = {
    AND?: ProblemScalarWhereInput | ProblemScalarWhereInput[]
    OR?: ProblemScalarWhereInput[]
    NOT?: ProblemScalarWhereInput | ProblemScalarWhereInput[]
    id?: StringFilter<"Problem"> | string
    title?: StringFilter<"Problem"> | string
    description?: StringFilter<"Problem"> | string
    difficulty?: EnumDifficultyFilter<"Problem"> | $Enums.Difficulty
    tags?: StringNullableListFilter<"Problem">
    userId?: StringFilter<"Problem"> | string
    examples?: JsonFilter<"Problem">
    constraints?: StringFilter<"Problem"> | string
    hints?: StringNullableFilter<"Problem"> | string | null
    editorial?: StringNullableFilter<"Problem"> | string | null
    testcases?: JsonFilter<"Problem">
    codeSnippets?: JsonFilter<"Problem">
    referenceSolutions?: JsonFilter<"Problem">
    createdAt?: DateTimeFilter<"Problem"> | Date | string
    updatedAt?: DateTimeFilter<"Problem"> | Date | string
  }

  export type SubmissionUpsertWithWhereUniqueWithoutUserInput = {
    where: SubmissionWhereUniqueInput
    update: XOR<SubmissionUpdateWithoutUserInput, SubmissionUncheckedUpdateWithoutUserInput>
    create: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput>
  }

  export type SubmissionUpdateWithWhereUniqueWithoutUserInput = {
    where: SubmissionWhereUniqueInput
    data: XOR<SubmissionUpdateWithoutUserInput, SubmissionUncheckedUpdateWithoutUserInput>
  }

  export type SubmissionUpdateManyWithWhereWithoutUserInput = {
    where: SubmissionScalarWhereInput
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyWithoutUserInput>
  }

  export type SubmissionScalarWhereInput = {
    AND?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
    OR?: SubmissionScalarWhereInput[]
    NOT?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
    id?: StringFilter<"Submission"> | string
    userId?: StringFilter<"Submission"> | string
    problemId?: StringFilter<"Submission"> | string
    sourceCode?: JsonFilter<"Submission">
    language?: StringFilter<"Submission"> | string
    stdin?: StringNullableFilter<"Submission"> | string | null
    stdout?: StringNullableFilter<"Submission"> | string | null
    stderr?: StringNullableFilter<"Submission"> | string | null
    compileOutput?: StringNullableFilter<"Submission"> | string | null
    status?: StringFilter<"Submission"> | string
    memory?: StringNullableFilter<"Submission"> | string | null
    time?: StringNullableFilter<"Submission"> | string | null
    createdAt?: DateTimeFilter<"Submission"> | Date | string
    updatedAt?: DateTimeFilter<"Submission"> | Date | string
  }

  export type ProblemSolvedUpsertWithWhereUniqueWithoutUserInput = {
    where: ProblemSolvedWhereUniqueInput
    update: XOR<ProblemSolvedUpdateWithoutUserInput, ProblemSolvedUncheckedUpdateWithoutUserInput>
    create: XOR<ProblemSolvedCreateWithoutUserInput, ProblemSolvedUncheckedCreateWithoutUserInput>
  }

  export type ProblemSolvedUpdateWithWhereUniqueWithoutUserInput = {
    where: ProblemSolvedWhereUniqueInput
    data: XOR<ProblemSolvedUpdateWithoutUserInput, ProblemSolvedUncheckedUpdateWithoutUserInput>
  }

  export type ProblemSolvedUpdateManyWithWhereWithoutUserInput = {
    where: ProblemSolvedScalarWhereInput
    data: XOR<ProblemSolvedUpdateManyMutationInput, ProblemSolvedUncheckedUpdateManyWithoutUserInput>
  }

  export type ProblemSolvedScalarWhereInput = {
    AND?: ProblemSolvedScalarWhereInput | ProblemSolvedScalarWhereInput[]
    OR?: ProblemSolvedScalarWhereInput[]
    NOT?: ProblemSolvedScalarWhereInput | ProblemSolvedScalarWhereInput[]
    id?: StringFilter<"ProblemSolved"> | string
    userId?: StringFilter<"ProblemSolved"> | string
    problemId?: StringFilter<"ProblemSolved"> | string
    createdAt?: DateTimeFilter<"ProblemSolved"> | Date | string
    updatedAt?: DateTimeFilter<"ProblemSolved"> | Date | string
  }

  export type PlaylistUpsertWithWhereUniqueWithoutUserInput = {
    where: PlaylistWhereUniqueInput
    update: XOR<PlaylistUpdateWithoutUserInput, PlaylistUncheckedUpdateWithoutUserInput>
    create: XOR<PlaylistCreateWithoutUserInput, PlaylistUncheckedCreateWithoutUserInput>
  }

  export type PlaylistUpdateWithWhereUniqueWithoutUserInput = {
    where: PlaylistWhereUniqueInput
    data: XOR<PlaylistUpdateWithoutUserInput, PlaylistUncheckedUpdateWithoutUserInput>
  }

  export type PlaylistUpdateManyWithWhereWithoutUserInput = {
    where: PlaylistScalarWhereInput
    data: XOR<PlaylistUpdateManyMutationInput, PlaylistUncheckedUpdateManyWithoutUserInput>
  }

  export type PlaylistScalarWhereInput = {
    AND?: PlaylistScalarWhereInput | PlaylistScalarWhereInput[]
    OR?: PlaylistScalarWhereInput[]
    NOT?: PlaylistScalarWhereInput | PlaylistScalarWhereInput[]
    id?: StringFilter<"Playlist"> | string
    name?: StringFilter<"Playlist"> | string
    description?: StringNullableFilter<"Playlist"> | string | null
    userId?: StringFilter<"Playlist"> | string
    createdAt?: DateTimeFilter<"Playlist"> | Date | string
    updatedAt?: DateTimeFilter<"Playlist"> | Date | string
  }

  export type SheetUpsertWithWhereUniqueWithoutUserInput = {
    where: SheetWhereUniqueInput
    update: XOR<SheetUpdateWithoutUserInput, SheetUncheckedUpdateWithoutUserInput>
    create: XOR<SheetCreateWithoutUserInput, SheetUncheckedCreateWithoutUserInput>
  }

  export type SheetUpdateWithWhereUniqueWithoutUserInput = {
    where: SheetWhereUniqueInput
    data: XOR<SheetUpdateWithoutUserInput, SheetUncheckedUpdateWithoutUserInput>
  }

  export type SheetUpdateManyWithWhereWithoutUserInput = {
    where: SheetScalarWhereInput
    data: XOR<SheetUpdateManyMutationInput, SheetUncheckedUpdateManyWithoutUserInput>
  }

  export type SheetScalarWhereInput = {
    AND?: SheetScalarWhereInput | SheetScalarWhereInput[]
    OR?: SheetScalarWhereInput[]
    NOT?: SheetScalarWhereInput | SheetScalarWhereInput[]
    id?: StringFilter<"Sheet"> | string
    title?: StringFilter<"Sheet"> | string
    company?: StringFilter<"Sheet"> | string
    description?: StringNullableFilter<"Sheet"> | string | null
    userId?: StringFilter<"Sheet"> | string
    price?: IntFilter<"Sheet"> | number
    isPaid?: BoolFilter<"Sheet"> | boolean
    createdAt?: DateTimeFilter<"Sheet"> | Date | string
    updatedAt?: DateTimeFilter<"Sheet"> | Date | string
  }

  export type OrderUpsertWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
  }

  export type OrderUpdateManyWithWhereWithoutUserInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutUserInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[]
    OR?: OrderScalarWhereInput[]
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[]
    id?: StringFilter<"Order"> | string
    userId?: StringFilter<"Order"> | string
    sheetId?: StringFilter<"Order"> | string
    razorpayOrderId?: StringFilter<"Order"> | string
    razorpayPaymentId?: StringNullableFilter<"Order"> | string | null
    razorpaySignature?: StringNullableFilter<"Order"> | string | null
    status?: StringFilter<"Order"> | string
    amount?: IntFilter<"Order"> | number
    createdAt?: DateTimeFilter<"Order"> | Date | string
  }

  export type SubmissionCreateWithoutProblemInput = {
    id?: string
    sourceCode: JsonNullValueInput | InputJsonValue
    language: string
    stdin?: string | null
    stdout?: string | null
    stderr?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSubmissionsInput
    testCases?: TestCaseResultCreateNestedManyWithoutSubmissionInput
  }

  export type SubmissionUncheckedCreateWithoutProblemInput = {
    id?: string
    userId: string
    sourceCode: JsonNullValueInput | InputJsonValue
    language: string
    stdin?: string | null
    stdout?: string | null
    stderr?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    testCases?: TestCaseResultUncheckedCreateNestedManyWithoutSubmissionInput
  }

  export type SubmissionCreateOrConnectWithoutProblemInput = {
    where: SubmissionWhereUniqueInput
    create: XOR<SubmissionCreateWithoutProblemInput, SubmissionUncheckedCreateWithoutProblemInput>
  }

  export type SubmissionCreateManyProblemInputEnvelope = {
    data: SubmissionCreateManyProblemInput | SubmissionCreateManyProblemInput[]
    skipDuplicates?: boolean
  }

  export type ProblemSolvedCreateWithoutProblemInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProblemSolvedInput
  }

  export type ProblemSolvedUncheckedCreateWithoutProblemInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProblemSolvedCreateOrConnectWithoutProblemInput = {
    where: ProblemSolvedWhereUniqueInput
    create: XOR<ProblemSolvedCreateWithoutProblemInput, ProblemSolvedUncheckedCreateWithoutProblemInput>
  }

  export type ProblemSolvedCreateManyProblemInputEnvelope = {
    data: ProblemSolvedCreateManyProblemInput | ProblemSolvedCreateManyProblemInput[]
    skipDuplicates?: boolean
  }

  export type ProblemInPlaylistCreateWithoutProblemInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    playlist: PlaylistCreateNestedOneWithoutProblemsInput
  }

  export type ProblemInPlaylistUncheckedCreateWithoutProblemInput = {
    id?: string
    playlistId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProblemInPlaylistCreateOrConnectWithoutProblemInput = {
    where: ProblemInPlaylistWhereUniqueInput
    create: XOR<ProblemInPlaylistCreateWithoutProblemInput, ProblemInPlaylistUncheckedCreateWithoutProblemInput>
  }

  export type ProblemInPlaylistCreateManyProblemInputEnvelope = {
    data: ProblemInPlaylistCreateManyProblemInput | ProblemInPlaylistCreateManyProblemInput[]
    skipDuplicates?: boolean
  }

  export type ProblemInSheetCreateWithoutProblemInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sheet: SheetCreateNestedOneWithoutProblemsInput
  }

  export type ProblemInSheetUncheckedCreateWithoutProblemInput = {
    id?: string
    sheetId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProblemInSheetCreateOrConnectWithoutProblemInput = {
    where: ProblemInSheetWhereUniqueInput
    create: XOR<ProblemInSheetCreateWithoutProblemInput, ProblemInSheetUncheckedCreateWithoutProblemInput>
  }

  export type ProblemInSheetCreateManyProblemInputEnvelope = {
    data: ProblemInSheetCreateManyProblemInput | ProblemInSheetCreateManyProblemInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutPrblemsInput = {
    id?: string
    name?: string | null
    email: string
    image?: string | null
    role?: $Enums.UserRole
    password?: string | null
    refreshToken?: string | null
    forgotPasswordToken?: string | null
    forgotPasswordExpiry?: Date | string | null
    isEmailVerified?: boolean
    emailVerificationToken?: string | null
    emailVerificationExpiry?: Date | string | null
    googleId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    submissions?: SubmissionCreateNestedManyWithoutUserInput
    problemSolved?: ProblemSolvedCreateNestedManyWithoutUserInput
    playlists?: PlaylistCreateNestedManyWithoutUserInput
    sheet?: SheetCreateNestedManyWithoutUserInput
    orders?: OrderCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPrblemsInput = {
    id?: string
    name?: string | null
    email: string
    image?: string | null
    role?: $Enums.UserRole
    password?: string | null
    refreshToken?: string | null
    forgotPasswordToken?: string | null
    forgotPasswordExpiry?: Date | string | null
    isEmailVerified?: boolean
    emailVerificationToken?: string | null
    emailVerificationExpiry?: Date | string | null
    googleId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    submissions?: SubmissionUncheckedCreateNestedManyWithoutUserInput
    problemSolved?: ProblemSolvedUncheckedCreateNestedManyWithoutUserInput
    playlists?: PlaylistUncheckedCreateNestedManyWithoutUserInput
    sheet?: SheetUncheckedCreateNestedManyWithoutUserInput
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPrblemsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPrblemsInput, UserUncheckedCreateWithoutPrblemsInput>
  }

  export type SubmissionUpsertWithWhereUniqueWithoutProblemInput = {
    where: SubmissionWhereUniqueInput
    update: XOR<SubmissionUpdateWithoutProblemInput, SubmissionUncheckedUpdateWithoutProblemInput>
    create: XOR<SubmissionCreateWithoutProblemInput, SubmissionUncheckedCreateWithoutProblemInput>
  }

  export type SubmissionUpdateWithWhereUniqueWithoutProblemInput = {
    where: SubmissionWhereUniqueInput
    data: XOR<SubmissionUpdateWithoutProblemInput, SubmissionUncheckedUpdateWithoutProblemInput>
  }

  export type SubmissionUpdateManyWithWhereWithoutProblemInput = {
    where: SubmissionScalarWhereInput
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyWithoutProblemInput>
  }

  export type ProblemSolvedUpsertWithWhereUniqueWithoutProblemInput = {
    where: ProblemSolvedWhereUniqueInput
    update: XOR<ProblemSolvedUpdateWithoutProblemInput, ProblemSolvedUncheckedUpdateWithoutProblemInput>
    create: XOR<ProblemSolvedCreateWithoutProblemInput, ProblemSolvedUncheckedCreateWithoutProblemInput>
  }

  export type ProblemSolvedUpdateWithWhereUniqueWithoutProblemInput = {
    where: ProblemSolvedWhereUniqueInput
    data: XOR<ProblemSolvedUpdateWithoutProblemInput, ProblemSolvedUncheckedUpdateWithoutProblemInput>
  }

  export type ProblemSolvedUpdateManyWithWhereWithoutProblemInput = {
    where: ProblemSolvedScalarWhereInput
    data: XOR<ProblemSolvedUpdateManyMutationInput, ProblemSolvedUncheckedUpdateManyWithoutProblemInput>
  }

  export type ProblemInPlaylistUpsertWithWhereUniqueWithoutProblemInput = {
    where: ProblemInPlaylistWhereUniqueInput
    update: XOR<ProblemInPlaylistUpdateWithoutProblemInput, ProblemInPlaylistUncheckedUpdateWithoutProblemInput>
    create: XOR<ProblemInPlaylistCreateWithoutProblemInput, ProblemInPlaylistUncheckedCreateWithoutProblemInput>
  }

  export type ProblemInPlaylistUpdateWithWhereUniqueWithoutProblemInput = {
    where: ProblemInPlaylistWhereUniqueInput
    data: XOR<ProblemInPlaylistUpdateWithoutProblemInput, ProblemInPlaylistUncheckedUpdateWithoutProblemInput>
  }

  export type ProblemInPlaylistUpdateManyWithWhereWithoutProblemInput = {
    where: ProblemInPlaylistScalarWhereInput
    data: XOR<ProblemInPlaylistUpdateManyMutationInput, ProblemInPlaylistUncheckedUpdateManyWithoutProblemInput>
  }

  export type ProblemInPlaylistScalarWhereInput = {
    AND?: ProblemInPlaylistScalarWhereInput | ProblemInPlaylistScalarWhereInput[]
    OR?: ProblemInPlaylistScalarWhereInput[]
    NOT?: ProblemInPlaylistScalarWhereInput | ProblemInPlaylistScalarWhereInput[]
    id?: StringFilter<"ProblemInPlaylist"> | string
    problemId?: StringFilter<"ProblemInPlaylist"> | string
    playlistId?: StringFilter<"ProblemInPlaylist"> | string
    createdAt?: DateTimeFilter<"ProblemInPlaylist"> | Date | string
    updatedAt?: DateTimeFilter<"ProblemInPlaylist"> | Date | string
  }

  export type ProblemInSheetUpsertWithWhereUniqueWithoutProblemInput = {
    where: ProblemInSheetWhereUniqueInput
    update: XOR<ProblemInSheetUpdateWithoutProblemInput, ProblemInSheetUncheckedUpdateWithoutProblemInput>
    create: XOR<ProblemInSheetCreateWithoutProblemInput, ProblemInSheetUncheckedCreateWithoutProblemInput>
  }

  export type ProblemInSheetUpdateWithWhereUniqueWithoutProblemInput = {
    where: ProblemInSheetWhereUniqueInput
    data: XOR<ProblemInSheetUpdateWithoutProblemInput, ProblemInSheetUncheckedUpdateWithoutProblemInput>
  }

  export type ProblemInSheetUpdateManyWithWhereWithoutProblemInput = {
    where: ProblemInSheetScalarWhereInput
    data: XOR<ProblemInSheetUpdateManyMutationInput, ProblemInSheetUncheckedUpdateManyWithoutProblemInput>
  }

  export type ProblemInSheetScalarWhereInput = {
    AND?: ProblemInSheetScalarWhereInput | ProblemInSheetScalarWhereInput[]
    OR?: ProblemInSheetScalarWhereInput[]
    NOT?: ProblemInSheetScalarWhereInput | ProblemInSheetScalarWhereInput[]
    id?: StringFilter<"ProblemInSheet"> | string
    problemId?: StringFilter<"ProblemInSheet"> | string
    sheetId?: StringFilter<"ProblemInSheet"> | string
    createdAt?: DateTimeFilter<"ProblemInSheet"> | Date | string
    updatedAt?: DateTimeFilter<"ProblemInSheet"> | Date | string
  }

  export type UserUpsertWithoutPrblemsInput = {
    update: XOR<UserUpdateWithoutPrblemsInput, UserUncheckedUpdateWithoutPrblemsInput>
    create: XOR<UserCreateWithoutPrblemsInput, UserUncheckedCreateWithoutPrblemsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPrblemsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPrblemsInput, UserUncheckedUpdateWithoutPrblemsInput>
  }

  export type UserUpdateWithoutPrblemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    forgotPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    forgotPasswordExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: SubmissionUpdateManyWithoutUserNestedInput
    problemSolved?: ProblemSolvedUpdateManyWithoutUserNestedInput
    playlists?: PlaylistUpdateManyWithoutUserNestedInput
    sheet?: SheetUpdateManyWithoutUserNestedInput
    orders?: OrderUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPrblemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    forgotPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    forgotPasswordExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: SubmissionUncheckedUpdateManyWithoutUserNestedInput
    problemSolved?: ProblemSolvedUncheckedUpdateManyWithoutUserNestedInput
    playlists?: PlaylistUncheckedUpdateManyWithoutUserNestedInput
    sheet?: SheetUncheckedUpdateManyWithoutUserNestedInput
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSubmissionsInput = {
    id?: string
    name?: string | null
    email: string
    image?: string | null
    role?: $Enums.UserRole
    password?: string | null
    refreshToken?: string | null
    forgotPasswordToken?: string | null
    forgotPasswordExpiry?: Date | string | null
    isEmailVerified?: boolean
    emailVerificationToken?: string | null
    emailVerificationExpiry?: Date | string | null
    googleId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    prblems?: ProblemCreateNestedManyWithoutUserInput
    problemSolved?: ProblemSolvedCreateNestedManyWithoutUserInput
    playlists?: PlaylistCreateNestedManyWithoutUserInput
    sheet?: SheetCreateNestedManyWithoutUserInput
    orders?: OrderCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSubmissionsInput = {
    id?: string
    name?: string | null
    email: string
    image?: string | null
    role?: $Enums.UserRole
    password?: string | null
    refreshToken?: string | null
    forgotPasswordToken?: string | null
    forgotPasswordExpiry?: Date | string | null
    isEmailVerified?: boolean
    emailVerificationToken?: string | null
    emailVerificationExpiry?: Date | string | null
    googleId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    prblems?: ProblemUncheckedCreateNestedManyWithoutUserInput
    problemSolved?: ProblemSolvedUncheckedCreateNestedManyWithoutUserInput
    playlists?: PlaylistUncheckedCreateNestedManyWithoutUserInput
    sheet?: SheetUncheckedCreateNestedManyWithoutUserInput
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSubmissionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSubmissionsInput, UserUncheckedCreateWithoutSubmissionsInput>
  }

  export type ProblemCreateWithoutSubmissionInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.Difficulty
    tags?: ProblemCreatetagsInput | string[]
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: string | null
    editorial?: string | null
    testcases: JsonNullValueInput | InputJsonValue
    codeSnippets: JsonNullValueInput | InputJsonValue
    referenceSolutions: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    solvedBy?: ProblemSolvedCreateNestedManyWithoutProblemInput
    problemsPlaylist?: ProblemInPlaylistCreateNestedManyWithoutProblemInput
    problemsSheet?: ProblemInSheetCreateNestedManyWithoutProblemInput
    User: UserCreateNestedOneWithoutPrblemsInput
  }

  export type ProblemUncheckedCreateWithoutSubmissionInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.Difficulty
    tags?: ProblemCreatetagsInput | string[]
    userId: string
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: string | null
    editorial?: string | null
    testcases: JsonNullValueInput | InputJsonValue
    codeSnippets: JsonNullValueInput | InputJsonValue
    referenceSolutions: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    solvedBy?: ProblemSolvedUncheckedCreateNestedManyWithoutProblemInput
    problemsPlaylist?: ProblemInPlaylistUncheckedCreateNestedManyWithoutProblemInput
    problemsSheet?: ProblemInSheetUncheckedCreateNestedManyWithoutProblemInput
  }

  export type ProblemCreateOrConnectWithoutSubmissionInput = {
    where: ProblemWhereUniqueInput
    create: XOR<ProblemCreateWithoutSubmissionInput, ProblemUncheckedCreateWithoutSubmissionInput>
  }

  export type TestCaseResultCreateWithoutSubmissionInput = {
    id?: string
    testCase: number
    passed: boolean
    stdout?: string | null
    expected: string
    stderr?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TestCaseResultUncheckedCreateWithoutSubmissionInput = {
    id?: string
    testCase: number
    passed: boolean
    stdout?: string | null
    expected: string
    stderr?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TestCaseResultCreateOrConnectWithoutSubmissionInput = {
    where: TestCaseResultWhereUniqueInput
    create: XOR<TestCaseResultCreateWithoutSubmissionInput, TestCaseResultUncheckedCreateWithoutSubmissionInput>
  }

  export type TestCaseResultCreateManySubmissionInputEnvelope = {
    data: TestCaseResultCreateManySubmissionInput | TestCaseResultCreateManySubmissionInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutSubmissionsInput = {
    update: XOR<UserUpdateWithoutSubmissionsInput, UserUncheckedUpdateWithoutSubmissionsInput>
    create: XOR<UserCreateWithoutSubmissionsInput, UserUncheckedCreateWithoutSubmissionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSubmissionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSubmissionsInput, UserUncheckedUpdateWithoutSubmissionsInput>
  }

  export type UserUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    forgotPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    forgotPasswordExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prblems?: ProblemUpdateManyWithoutUserNestedInput
    problemSolved?: ProblemSolvedUpdateManyWithoutUserNestedInput
    playlists?: PlaylistUpdateManyWithoutUserNestedInput
    sheet?: SheetUpdateManyWithoutUserNestedInput
    orders?: OrderUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    forgotPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    forgotPasswordExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prblems?: ProblemUncheckedUpdateManyWithoutUserNestedInput
    problemSolved?: ProblemSolvedUncheckedUpdateManyWithoutUserNestedInput
    playlists?: PlaylistUncheckedUpdateManyWithoutUserNestedInput
    sheet?: SheetUncheckedUpdateManyWithoutUserNestedInput
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProblemUpsertWithoutSubmissionInput = {
    update: XOR<ProblemUpdateWithoutSubmissionInput, ProblemUncheckedUpdateWithoutSubmissionInput>
    create: XOR<ProblemCreateWithoutSubmissionInput, ProblemUncheckedCreateWithoutSubmissionInput>
    where?: ProblemWhereInput
  }

  export type ProblemUpdateToOneWithWhereWithoutSubmissionInput = {
    where?: ProblemWhereInput
    data: XOR<ProblemUpdateWithoutSubmissionInput, ProblemUncheckedUpdateWithoutSubmissionInput>
  }

  export type ProblemUpdateWithoutSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    tags?: ProblemUpdatetagsInput | string[]
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    testcases?: JsonNullValueInput | InputJsonValue
    codeSnippets?: JsonNullValueInput | InputJsonValue
    referenceSolutions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    solvedBy?: ProblemSolvedUpdateManyWithoutProblemNestedInput
    problemsPlaylist?: ProblemInPlaylistUpdateManyWithoutProblemNestedInput
    problemsSheet?: ProblemInSheetUpdateManyWithoutProblemNestedInput
    User?: UserUpdateOneRequiredWithoutPrblemsNestedInput
  }

  export type ProblemUncheckedUpdateWithoutSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    tags?: ProblemUpdatetagsInput | string[]
    userId?: StringFieldUpdateOperationsInput | string
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    testcases?: JsonNullValueInput | InputJsonValue
    codeSnippets?: JsonNullValueInput | InputJsonValue
    referenceSolutions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    solvedBy?: ProblemSolvedUncheckedUpdateManyWithoutProblemNestedInput
    problemsPlaylist?: ProblemInPlaylistUncheckedUpdateManyWithoutProblemNestedInput
    problemsSheet?: ProblemInSheetUncheckedUpdateManyWithoutProblemNestedInput
  }

  export type TestCaseResultUpsertWithWhereUniqueWithoutSubmissionInput = {
    where: TestCaseResultWhereUniqueInput
    update: XOR<TestCaseResultUpdateWithoutSubmissionInput, TestCaseResultUncheckedUpdateWithoutSubmissionInput>
    create: XOR<TestCaseResultCreateWithoutSubmissionInput, TestCaseResultUncheckedCreateWithoutSubmissionInput>
  }

  export type TestCaseResultUpdateWithWhereUniqueWithoutSubmissionInput = {
    where: TestCaseResultWhereUniqueInput
    data: XOR<TestCaseResultUpdateWithoutSubmissionInput, TestCaseResultUncheckedUpdateWithoutSubmissionInput>
  }

  export type TestCaseResultUpdateManyWithWhereWithoutSubmissionInput = {
    where: TestCaseResultScalarWhereInput
    data: XOR<TestCaseResultUpdateManyMutationInput, TestCaseResultUncheckedUpdateManyWithoutSubmissionInput>
  }

  export type TestCaseResultScalarWhereInput = {
    AND?: TestCaseResultScalarWhereInput | TestCaseResultScalarWhereInput[]
    OR?: TestCaseResultScalarWhereInput[]
    NOT?: TestCaseResultScalarWhereInput | TestCaseResultScalarWhereInput[]
    id?: StringFilter<"TestCaseResult"> | string
    submissionId?: StringFilter<"TestCaseResult"> | string
    testCase?: IntFilter<"TestCaseResult"> | number
    passed?: BoolFilter<"TestCaseResult"> | boolean
    stdout?: StringNullableFilter<"TestCaseResult"> | string | null
    expected?: StringFilter<"TestCaseResult"> | string
    stderr?: StringNullableFilter<"TestCaseResult"> | string | null
    compileOutput?: StringNullableFilter<"TestCaseResult"> | string | null
    status?: StringFilter<"TestCaseResult"> | string
    memory?: StringNullableFilter<"TestCaseResult"> | string | null
    time?: StringNullableFilter<"TestCaseResult"> | string | null
    createdAt?: DateTimeFilter<"TestCaseResult"> | Date | string
    updatedAt?: DateTimeFilter<"TestCaseResult"> | Date | string
  }

  export type SubmissionCreateWithoutTestCasesInput = {
    id?: string
    sourceCode: JsonNullValueInput | InputJsonValue
    language: string
    stdin?: string | null
    stdout?: string | null
    stderr?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSubmissionsInput
    problem: ProblemCreateNestedOneWithoutSubmissionInput
  }

  export type SubmissionUncheckedCreateWithoutTestCasesInput = {
    id?: string
    userId: string
    problemId: string
    sourceCode: JsonNullValueInput | InputJsonValue
    language: string
    stdin?: string | null
    stdout?: string | null
    stderr?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubmissionCreateOrConnectWithoutTestCasesInput = {
    where: SubmissionWhereUniqueInput
    create: XOR<SubmissionCreateWithoutTestCasesInput, SubmissionUncheckedCreateWithoutTestCasesInput>
  }

  export type SubmissionUpsertWithoutTestCasesInput = {
    update: XOR<SubmissionUpdateWithoutTestCasesInput, SubmissionUncheckedUpdateWithoutTestCasesInput>
    create: XOR<SubmissionCreateWithoutTestCasesInput, SubmissionUncheckedCreateWithoutTestCasesInput>
    where?: SubmissionWhereInput
  }

  export type SubmissionUpdateToOneWithWhereWithoutTestCasesInput = {
    where?: SubmissionWhereInput
    data: XOR<SubmissionUpdateWithoutTestCasesInput, SubmissionUncheckedUpdateWithoutTestCasesInput>
  }

  export type SubmissionUpdateWithoutTestCasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceCode?: JsonNullValueInput | InputJsonValue
    language?: StringFieldUpdateOperationsInput | string
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSubmissionsNestedInput
    problem?: ProblemUpdateOneRequiredWithoutSubmissionNestedInput
  }

  export type SubmissionUncheckedUpdateWithoutTestCasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    sourceCode?: JsonNullValueInput | InputJsonValue
    language?: StringFieldUpdateOperationsInput | string
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutProblemSolvedInput = {
    id?: string
    name?: string | null
    email: string
    image?: string | null
    role?: $Enums.UserRole
    password?: string | null
    refreshToken?: string | null
    forgotPasswordToken?: string | null
    forgotPasswordExpiry?: Date | string | null
    isEmailVerified?: boolean
    emailVerificationToken?: string | null
    emailVerificationExpiry?: Date | string | null
    googleId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    prblems?: ProblemCreateNestedManyWithoutUserInput
    submissions?: SubmissionCreateNestedManyWithoutUserInput
    playlists?: PlaylistCreateNestedManyWithoutUserInput
    sheet?: SheetCreateNestedManyWithoutUserInput
    orders?: OrderCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProblemSolvedInput = {
    id?: string
    name?: string | null
    email: string
    image?: string | null
    role?: $Enums.UserRole
    password?: string | null
    refreshToken?: string | null
    forgotPasswordToken?: string | null
    forgotPasswordExpiry?: Date | string | null
    isEmailVerified?: boolean
    emailVerificationToken?: string | null
    emailVerificationExpiry?: Date | string | null
    googleId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    prblems?: ProblemUncheckedCreateNestedManyWithoutUserInput
    submissions?: SubmissionUncheckedCreateNestedManyWithoutUserInput
    playlists?: PlaylistUncheckedCreateNestedManyWithoutUserInput
    sheet?: SheetUncheckedCreateNestedManyWithoutUserInput
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProblemSolvedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProblemSolvedInput, UserUncheckedCreateWithoutProblemSolvedInput>
  }

  export type ProblemCreateWithoutSolvedByInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.Difficulty
    tags?: ProblemCreatetagsInput | string[]
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: string | null
    editorial?: string | null
    testcases: JsonNullValueInput | InputJsonValue
    codeSnippets: JsonNullValueInput | InputJsonValue
    referenceSolutions: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    submission?: SubmissionCreateNestedManyWithoutProblemInput
    problemsPlaylist?: ProblemInPlaylistCreateNestedManyWithoutProblemInput
    problemsSheet?: ProblemInSheetCreateNestedManyWithoutProblemInput
    User: UserCreateNestedOneWithoutPrblemsInput
  }

  export type ProblemUncheckedCreateWithoutSolvedByInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.Difficulty
    tags?: ProblemCreatetagsInput | string[]
    userId: string
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: string | null
    editorial?: string | null
    testcases: JsonNullValueInput | InputJsonValue
    codeSnippets: JsonNullValueInput | InputJsonValue
    referenceSolutions: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    submission?: SubmissionUncheckedCreateNestedManyWithoutProblemInput
    problemsPlaylist?: ProblemInPlaylistUncheckedCreateNestedManyWithoutProblemInput
    problemsSheet?: ProblemInSheetUncheckedCreateNestedManyWithoutProblemInput
  }

  export type ProblemCreateOrConnectWithoutSolvedByInput = {
    where: ProblemWhereUniqueInput
    create: XOR<ProblemCreateWithoutSolvedByInput, ProblemUncheckedCreateWithoutSolvedByInput>
  }

  export type UserUpsertWithoutProblemSolvedInput = {
    update: XOR<UserUpdateWithoutProblemSolvedInput, UserUncheckedUpdateWithoutProblemSolvedInput>
    create: XOR<UserCreateWithoutProblemSolvedInput, UserUncheckedCreateWithoutProblemSolvedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProblemSolvedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProblemSolvedInput, UserUncheckedUpdateWithoutProblemSolvedInput>
  }

  export type UserUpdateWithoutProblemSolvedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    forgotPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    forgotPasswordExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prblems?: ProblemUpdateManyWithoutUserNestedInput
    submissions?: SubmissionUpdateManyWithoutUserNestedInput
    playlists?: PlaylistUpdateManyWithoutUserNestedInput
    sheet?: SheetUpdateManyWithoutUserNestedInput
    orders?: OrderUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProblemSolvedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    forgotPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    forgotPasswordExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prblems?: ProblemUncheckedUpdateManyWithoutUserNestedInput
    submissions?: SubmissionUncheckedUpdateManyWithoutUserNestedInput
    playlists?: PlaylistUncheckedUpdateManyWithoutUserNestedInput
    sheet?: SheetUncheckedUpdateManyWithoutUserNestedInput
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProblemUpsertWithoutSolvedByInput = {
    update: XOR<ProblemUpdateWithoutSolvedByInput, ProblemUncheckedUpdateWithoutSolvedByInput>
    create: XOR<ProblemCreateWithoutSolvedByInput, ProblemUncheckedCreateWithoutSolvedByInput>
    where?: ProblemWhereInput
  }

  export type ProblemUpdateToOneWithWhereWithoutSolvedByInput = {
    where?: ProblemWhereInput
    data: XOR<ProblemUpdateWithoutSolvedByInput, ProblemUncheckedUpdateWithoutSolvedByInput>
  }

  export type ProblemUpdateWithoutSolvedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    tags?: ProblemUpdatetagsInput | string[]
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    testcases?: JsonNullValueInput | InputJsonValue
    codeSnippets?: JsonNullValueInput | InputJsonValue
    referenceSolutions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submission?: SubmissionUpdateManyWithoutProblemNestedInput
    problemsPlaylist?: ProblemInPlaylistUpdateManyWithoutProblemNestedInput
    problemsSheet?: ProblemInSheetUpdateManyWithoutProblemNestedInput
    User?: UserUpdateOneRequiredWithoutPrblemsNestedInput
  }

  export type ProblemUncheckedUpdateWithoutSolvedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    tags?: ProblemUpdatetagsInput | string[]
    userId?: StringFieldUpdateOperationsInput | string
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    testcases?: JsonNullValueInput | InputJsonValue
    codeSnippets?: JsonNullValueInput | InputJsonValue
    referenceSolutions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submission?: SubmissionUncheckedUpdateManyWithoutProblemNestedInput
    problemsPlaylist?: ProblemInPlaylistUncheckedUpdateManyWithoutProblemNestedInput
    problemsSheet?: ProblemInSheetUncheckedUpdateManyWithoutProblemNestedInput
  }

  export type ProblemInPlaylistCreateWithoutPlaylistInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    problem: ProblemCreateNestedOneWithoutProblemsPlaylistInput
  }

  export type ProblemInPlaylistUncheckedCreateWithoutPlaylistInput = {
    id?: string
    problemId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProblemInPlaylistCreateOrConnectWithoutPlaylistInput = {
    where: ProblemInPlaylistWhereUniqueInput
    create: XOR<ProblemInPlaylistCreateWithoutPlaylistInput, ProblemInPlaylistUncheckedCreateWithoutPlaylistInput>
  }

  export type ProblemInPlaylistCreateManyPlaylistInputEnvelope = {
    data: ProblemInPlaylistCreateManyPlaylistInput | ProblemInPlaylistCreateManyPlaylistInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutPlaylistsInput = {
    id?: string
    name?: string | null
    email: string
    image?: string | null
    role?: $Enums.UserRole
    password?: string | null
    refreshToken?: string | null
    forgotPasswordToken?: string | null
    forgotPasswordExpiry?: Date | string | null
    isEmailVerified?: boolean
    emailVerificationToken?: string | null
    emailVerificationExpiry?: Date | string | null
    googleId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    prblems?: ProblemCreateNestedManyWithoutUserInput
    submissions?: SubmissionCreateNestedManyWithoutUserInput
    problemSolved?: ProblemSolvedCreateNestedManyWithoutUserInput
    sheet?: SheetCreateNestedManyWithoutUserInput
    orders?: OrderCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPlaylistsInput = {
    id?: string
    name?: string | null
    email: string
    image?: string | null
    role?: $Enums.UserRole
    password?: string | null
    refreshToken?: string | null
    forgotPasswordToken?: string | null
    forgotPasswordExpiry?: Date | string | null
    isEmailVerified?: boolean
    emailVerificationToken?: string | null
    emailVerificationExpiry?: Date | string | null
    googleId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    prblems?: ProblemUncheckedCreateNestedManyWithoutUserInput
    submissions?: SubmissionUncheckedCreateNestedManyWithoutUserInput
    problemSolved?: ProblemSolvedUncheckedCreateNestedManyWithoutUserInput
    sheet?: SheetUncheckedCreateNestedManyWithoutUserInput
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPlaylistsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPlaylistsInput, UserUncheckedCreateWithoutPlaylistsInput>
  }

  export type ProblemInPlaylistUpsertWithWhereUniqueWithoutPlaylistInput = {
    where: ProblemInPlaylistWhereUniqueInput
    update: XOR<ProblemInPlaylistUpdateWithoutPlaylistInput, ProblemInPlaylistUncheckedUpdateWithoutPlaylistInput>
    create: XOR<ProblemInPlaylistCreateWithoutPlaylistInput, ProblemInPlaylistUncheckedCreateWithoutPlaylistInput>
  }

  export type ProblemInPlaylistUpdateWithWhereUniqueWithoutPlaylistInput = {
    where: ProblemInPlaylistWhereUniqueInput
    data: XOR<ProblemInPlaylistUpdateWithoutPlaylistInput, ProblemInPlaylistUncheckedUpdateWithoutPlaylistInput>
  }

  export type ProblemInPlaylistUpdateManyWithWhereWithoutPlaylistInput = {
    where: ProblemInPlaylistScalarWhereInput
    data: XOR<ProblemInPlaylistUpdateManyMutationInput, ProblemInPlaylistUncheckedUpdateManyWithoutPlaylistInput>
  }

  export type UserUpsertWithoutPlaylistsInput = {
    update: XOR<UserUpdateWithoutPlaylistsInput, UserUncheckedUpdateWithoutPlaylistsInput>
    create: XOR<UserCreateWithoutPlaylistsInput, UserUncheckedCreateWithoutPlaylistsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPlaylistsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPlaylistsInput, UserUncheckedUpdateWithoutPlaylistsInput>
  }

  export type UserUpdateWithoutPlaylistsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    forgotPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    forgotPasswordExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prblems?: ProblemUpdateManyWithoutUserNestedInput
    submissions?: SubmissionUpdateManyWithoutUserNestedInput
    problemSolved?: ProblemSolvedUpdateManyWithoutUserNestedInput
    sheet?: SheetUpdateManyWithoutUserNestedInput
    orders?: OrderUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPlaylistsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    forgotPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    forgotPasswordExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prblems?: ProblemUncheckedUpdateManyWithoutUserNestedInput
    submissions?: SubmissionUncheckedUpdateManyWithoutUserNestedInput
    problemSolved?: ProblemSolvedUncheckedUpdateManyWithoutUserNestedInput
    sheet?: SheetUncheckedUpdateManyWithoutUserNestedInput
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PlaylistCreateWithoutProblemsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPlaylistsInput
  }

  export type PlaylistUncheckedCreateWithoutProblemsInput = {
    id?: string
    name: string
    description?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlaylistCreateOrConnectWithoutProblemsInput = {
    where: PlaylistWhereUniqueInput
    create: XOR<PlaylistCreateWithoutProblemsInput, PlaylistUncheckedCreateWithoutProblemsInput>
  }

  export type ProblemCreateWithoutProblemsPlaylistInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.Difficulty
    tags?: ProblemCreatetagsInput | string[]
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: string | null
    editorial?: string | null
    testcases: JsonNullValueInput | InputJsonValue
    codeSnippets: JsonNullValueInput | InputJsonValue
    referenceSolutions: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    submission?: SubmissionCreateNestedManyWithoutProblemInput
    solvedBy?: ProblemSolvedCreateNestedManyWithoutProblemInput
    problemsSheet?: ProblemInSheetCreateNestedManyWithoutProblemInput
    User: UserCreateNestedOneWithoutPrblemsInput
  }

  export type ProblemUncheckedCreateWithoutProblemsPlaylistInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.Difficulty
    tags?: ProblemCreatetagsInput | string[]
    userId: string
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: string | null
    editorial?: string | null
    testcases: JsonNullValueInput | InputJsonValue
    codeSnippets: JsonNullValueInput | InputJsonValue
    referenceSolutions: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    submission?: SubmissionUncheckedCreateNestedManyWithoutProblemInput
    solvedBy?: ProblemSolvedUncheckedCreateNestedManyWithoutProblemInput
    problemsSheet?: ProblemInSheetUncheckedCreateNestedManyWithoutProblemInput
  }

  export type ProblemCreateOrConnectWithoutProblemsPlaylistInput = {
    where: ProblemWhereUniqueInput
    create: XOR<ProblemCreateWithoutProblemsPlaylistInput, ProblemUncheckedCreateWithoutProblemsPlaylistInput>
  }

  export type PlaylistUpsertWithoutProblemsInput = {
    update: XOR<PlaylistUpdateWithoutProblemsInput, PlaylistUncheckedUpdateWithoutProblemsInput>
    create: XOR<PlaylistCreateWithoutProblemsInput, PlaylistUncheckedCreateWithoutProblemsInput>
    where?: PlaylistWhereInput
  }

  export type PlaylistUpdateToOneWithWhereWithoutProblemsInput = {
    where?: PlaylistWhereInput
    data: XOR<PlaylistUpdateWithoutProblemsInput, PlaylistUncheckedUpdateWithoutProblemsInput>
  }

  export type PlaylistUpdateWithoutProblemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPlaylistsNestedInput
  }

  export type PlaylistUncheckedUpdateWithoutProblemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemUpsertWithoutProblemsPlaylistInput = {
    update: XOR<ProblemUpdateWithoutProblemsPlaylistInput, ProblemUncheckedUpdateWithoutProblemsPlaylistInput>
    create: XOR<ProblemCreateWithoutProblemsPlaylistInput, ProblemUncheckedCreateWithoutProblemsPlaylistInput>
    where?: ProblemWhereInput
  }

  export type ProblemUpdateToOneWithWhereWithoutProblemsPlaylistInput = {
    where?: ProblemWhereInput
    data: XOR<ProblemUpdateWithoutProblemsPlaylistInput, ProblemUncheckedUpdateWithoutProblemsPlaylistInput>
  }

  export type ProblemUpdateWithoutProblemsPlaylistInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    tags?: ProblemUpdatetagsInput | string[]
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    testcases?: JsonNullValueInput | InputJsonValue
    codeSnippets?: JsonNullValueInput | InputJsonValue
    referenceSolutions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submission?: SubmissionUpdateManyWithoutProblemNestedInput
    solvedBy?: ProblemSolvedUpdateManyWithoutProblemNestedInput
    problemsSheet?: ProblemInSheetUpdateManyWithoutProblemNestedInput
    User?: UserUpdateOneRequiredWithoutPrblemsNestedInput
  }

  export type ProblemUncheckedUpdateWithoutProblemsPlaylistInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    tags?: ProblemUpdatetagsInput | string[]
    userId?: StringFieldUpdateOperationsInput | string
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    testcases?: JsonNullValueInput | InputJsonValue
    codeSnippets?: JsonNullValueInput | InputJsonValue
    referenceSolutions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submission?: SubmissionUncheckedUpdateManyWithoutProblemNestedInput
    solvedBy?: ProblemSolvedUncheckedUpdateManyWithoutProblemNestedInput
    problemsSheet?: ProblemInSheetUncheckedUpdateManyWithoutProblemNestedInput
  }

  export type ProblemInSheetCreateWithoutSheetInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    problem: ProblemCreateNestedOneWithoutProblemsSheetInput
  }

  export type ProblemInSheetUncheckedCreateWithoutSheetInput = {
    id?: string
    problemId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProblemInSheetCreateOrConnectWithoutSheetInput = {
    where: ProblemInSheetWhereUniqueInput
    create: XOR<ProblemInSheetCreateWithoutSheetInput, ProblemInSheetUncheckedCreateWithoutSheetInput>
  }

  export type ProblemInSheetCreateManySheetInputEnvelope = {
    data: ProblemInSheetCreateManySheetInput | ProblemInSheetCreateManySheetInput[]
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutSheetInput = {
    id?: string
    razorpayOrderId: string
    razorpayPaymentId?: string | null
    razorpaySignature?: string | null
    status: string
    amount: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateWithoutSheetInput = {
    id?: string
    userId: string
    razorpayOrderId: string
    razorpayPaymentId?: string | null
    razorpaySignature?: string | null
    status: string
    amount: number
    createdAt?: Date | string
  }

  export type OrderCreateOrConnectWithoutSheetInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutSheetInput, OrderUncheckedCreateWithoutSheetInput>
  }

  export type OrderCreateManySheetInputEnvelope = {
    data: OrderCreateManySheetInput | OrderCreateManySheetInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutSheetInput = {
    id?: string
    name?: string | null
    email: string
    image?: string | null
    role?: $Enums.UserRole
    password?: string | null
    refreshToken?: string | null
    forgotPasswordToken?: string | null
    forgotPasswordExpiry?: Date | string | null
    isEmailVerified?: boolean
    emailVerificationToken?: string | null
    emailVerificationExpiry?: Date | string | null
    googleId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    prblems?: ProblemCreateNestedManyWithoutUserInput
    submissions?: SubmissionCreateNestedManyWithoutUserInput
    problemSolved?: ProblemSolvedCreateNestedManyWithoutUserInput
    playlists?: PlaylistCreateNestedManyWithoutUserInput
    orders?: OrderCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSheetInput = {
    id?: string
    name?: string | null
    email: string
    image?: string | null
    role?: $Enums.UserRole
    password?: string | null
    refreshToken?: string | null
    forgotPasswordToken?: string | null
    forgotPasswordExpiry?: Date | string | null
    isEmailVerified?: boolean
    emailVerificationToken?: string | null
    emailVerificationExpiry?: Date | string | null
    googleId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    prblems?: ProblemUncheckedCreateNestedManyWithoutUserInput
    submissions?: SubmissionUncheckedCreateNestedManyWithoutUserInput
    problemSolved?: ProblemSolvedUncheckedCreateNestedManyWithoutUserInput
    playlists?: PlaylistUncheckedCreateNestedManyWithoutUserInput
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSheetInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSheetInput, UserUncheckedCreateWithoutSheetInput>
  }

  export type ProblemInSheetUpsertWithWhereUniqueWithoutSheetInput = {
    where: ProblemInSheetWhereUniqueInput
    update: XOR<ProblemInSheetUpdateWithoutSheetInput, ProblemInSheetUncheckedUpdateWithoutSheetInput>
    create: XOR<ProblemInSheetCreateWithoutSheetInput, ProblemInSheetUncheckedCreateWithoutSheetInput>
  }

  export type ProblemInSheetUpdateWithWhereUniqueWithoutSheetInput = {
    where: ProblemInSheetWhereUniqueInput
    data: XOR<ProblemInSheetUpdateWithoutSheetInput, ProblemInSheetUncheckedUpdateWithoutSheetInput>
  }

  export type ProblemInSheetUpdateManyWithWhereWithoutSheetInput = {
    where: ProblemInSheetScalarWhereInput
    data: XOR<ProblemInSheetUpdateManyMutationInput, ProblemInSheetUncheckedUpdateManyWithoutSheetInput>
  }

  export type OrderUpsertWithWhereUniqueWithoutSheetInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutSheetInput, OrderUncheckedUpdateWithoutSheetInput>
    create: XOR<OrderCreateWithoutSheetInput, OrderUncheckedCreateWithoutSheetInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutSheetInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutSheetInput, OrderUncheckedUpdateWithoutSheetInput>
  }

  export type OrderUpdateManyWithWhereWithoutSheetInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutSheetInput>
  }

  export type UserUpsertWithoutSheetInput = {
    update: XOR<UserUpdateWithoutSheetInput, UserUncheckedUpdateWithoutSheetInput>
    create: XOR<UserCreateWithoutSheetInput, UserUncheckedCreateWithoutSheetInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSheetInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSheetInput, UserUncheckedUpdateWithoutSheetInput>
  }

  export type UserUpdateWithoutSheetInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    forgotPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    forgotPasswordExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prblems?: ProblemUpdateManyWithoutUserNestedInput
    submissions?: SubmissionUpdateManyWithoutUserNestedInput
    problemSolved?: ProblemSolvedUpdateManyWithoutUserNestedInput
    playlists?: PlaylistUpdateManyWithoutUserNestedInput
    orders?: OrderUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSheetInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    forgotPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    forgotPasswordExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prblems?: ProblemUncheckedUpdateManyWithoutUserNestedInput
    submissions?: SubmissionUncheckedUpdateManyWithoutUserNestedInput
    problemSolved?: ProblemSolvedUncheckedUpdateManyWithoutUserNestedInput
    playlists?: PlaylistUncheckedUpdateManyWithoutUserNestedInput
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SheetCreateWithoutProblemsInput = {
    id?: string
    title: string
    company: string
    description?: string | null
    price?: number
    isPaid?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderCreateNestedManyWithoutSheetInput
    user: UserCreateNestedOneWithoutSheetInput
  }

  export type SheetUncheckedCreateWithoutProblemsInput = {
    id?: string
    title: string
    company: string
    description?: string | null
    userId: string
    price?: number
    isPaid?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutSheetInput
  }

  export type SheetCreateOrConnectWithoutProblemsInput = {
    where: SheetWhereUniqueInput
    create: XOR<SheetCreateWithoutProblemsInput, SheetUncheckedCreateWithoutProblemsInput>
  }

  export type ProblemCreateWithoutProblemsSheetInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.Difficulty
    tags?: ProblemCreatetagsInput | string[]
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: string | null
    editorial?: string | null
    testcases: JsonNullValueInput | InputJsonValue
    codeSnippets: JsonNullValueInput | InputJsonValue
    referenceSolutions: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    submission?: SubmissionCreateNestedManyWithoutProblemInput
    solvedBy?: ProblemSolvedCreateNestedManyWithoutProblemInput
    problemsPlaylist?: ProblemInPlaylistCreateNestedManyWithoutProblemInput
    User: UserCreateNestedOneWithoutPrblemsInput
  }

  export type ProblemUncheckedCreateWithoutProblemsSheetInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.Difficulty
    tags?: ProblemCreatetagsInput | string[]
    userId: string
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: string | null
    editorial?: string | null
    testcases: JsonNullValueInput | InputJsonValue
    codeSnippets: JsonNullValueInput | InputJsonValue
    referenceSolutions: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    submission?: SubmissionUncheckedCreateNestedManyWithoutProblemInput
    solvedBy?: ProblemSolvedUncheckedCreateNestedManyWithoutProblemInput
    problemsPlaylist?: ProblemInPlaylistUncheckedCreateNestedManyWithoutProblemInput
  }

  export type ProblemCreateOrConnectWithoutProblemsSheetInput = {
    where: ProblemWhereUniqueInput
    create: XOR<ProblemCreateWithoutProblemsSheetInput, ProblemUncheckedCreateWithoutProblemsSheetInput>
  }

  export type SheetUpsertWithoutProblemsInput = {
    update: XOR<SheetUpdateWithoutProblemsInput, SheetUncheckedUpdateWithoutProblemsInput>
    create: XOR<SheetCreateWithoutProblemsInput, SheetUncheckedCreateWithoutProblemsInput>
    where?: SheetWhereInput
  }

  export type SheetUpdateToOneWithWhereWithoutProblemsInput = {
    where?: SheetWhereInput
    data: XOR<SheetUpdateWithoutProblemsInput, SheetUncheckedUpdateWithoutProblemsInput>
  }

  export type SheetUpdateWithoutProblemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutSheetNestedInput
    user?: UserUpdateOneRequiredWithoutSheetNestedInput
  }

  export type SheetUncheckedUpdateWithoutProblemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutSheetNestedInput
  }

  export type ProblemUpsertWithoutProblemsSheetInput = {
    update: XOR<ProblemUpdateWithoutProblemsSheetInput, ProblemUncheckedUpdateWithoutProblemsSheetInput>
    create: XOR<ProblemCreateWithoutProblemsSheetInput, ProblemUncheckedCreateWithoutProblemsSheetInput>
    where?: ProblemWhereInput
  }

  export type ProblemUpdateToOneWithWhereWithoutProblemsSheetInput = {
    where?: ProblemWhereInput
    data: XOR<ProblemUpdateWithoutProblemsSheetInput, ProblemUncheckedUpdateWithoutProblemsSheetInput>
  }

  export type ProblemUpdateWithoutProblemsSheetInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    tags?: ProblemUpdatetagsInput | string[]
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    testcases?: JsonNullValueInput | InputJsonValue
    codeSnippets?: JsonNullValueInput | InputJsonValue
    referenceSolutions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submission?: SubmissionUpdateManyWithoutProblemNestedInput
    solvedBy?: ProblemSolvedUpdateManyWithoutProblemNestedInput
    problemsPlaylist?: ProblemInPlaylistUpdateManyWithoutProblemNestedInput
    User?: UserUpdateOneRequiredWithoutPrblemsNestedInput
  }

  export type ProblemUncheckedUpdateWithoutProblemsSheetInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    tags?: ProblemUpdatetagsInput | string[]
    userId?: StringFieldUpdateOperationsInput | string
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    testcases?: JsonNullValueInput | InputJsonValue
    codeSnippets?: JsonNullValueInput | InputJsonValue
    referenceSolutions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submission?: SubmissionUncheckedUpdateManyWithoutProblemNestedInput
    solvedBy?: ProblemSolvedUncheckedUpdateManyWithoutProblemNestedInput
    problemsPlaylist?: ProblemInPlaylistUncheckedUpdateManyWithoutProblemNestedInput
  }

  export type UserCreateWithoutOrdersInput = {
    id?: string
    name?: string | null
    email: string
    image?: string | null
    role?: $Enums.UserRole
    password?: string | null
    refreshToken?: string | null
    forgotPasswordToken?: string | null
    forgotPasswordExpiry?: Date | string | null
    isEmailVerified?: boolean
    emailVerificationToken?: string | null
    emailVerificationExpiry?: Date | string | null
    googleId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    prblems?: ProblemCreateNestedManyWithoutUserInput
    submissions?: SubmissionCreateNestedManyWithoutUserInput
    problemSolved?: ProblemSolvedCreateNestedManyWithoutUserInput
    playlists?: PlaylistCreateNestedManyWithoutUserInput
    sheet?: SheetCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOrdersInput = {
    id?: string
    name?: string | null
    email: string
    image?: string | null
    role?: $Enums.UserRole
    password?: string | null
    refreshToken?: string | null
    forgotPasswordToken?: string | null
    forgotPasswordExpiry?: Date | string | null
    isEmailVerified?: boolean
    emailVerificationToken?: string | null
    emailVerificationExpiry?: Date | string | null
    googleId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    prblems?: ProblemUncheckedCreateNestedManyWithoutUserInput
    submissions?: SubmissionUncheckedCreateNestedManyWithoutUserInput
    problemSolved?: ProblemSolvedUncheckedCreateNestedManyWithoutUserInput
    playlists?: PlaylistUncheckedCreateNestedManyWithoutUserInput
    sheet?: SheetUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOrdersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
  }

  export type SheetCreateWithoutOrdersInput = {
    id?: string
    title: string
    company: string
    description?: string | null
    price?: number
    isPaid?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: ProblemInSheetCreateNestedManyWithoutSheetInput
    user: UserCreateNestedOneWithoutSheetInput
  }

  export type SheetUncheckedCreateWithoutOrdersInput = {
    id?: string
    title: string
    company: string
    description?: string | null
    userId: string
    price?: number
    isPaid?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: ProblemInSheetUncheckedCreateNestedManyWithoutSheetInput
  }

  export type SheetCreateOrConnectWithoutOrdersInput = {
    where: SheetWhereUniqueInput
    create: XOR<SheetCreateWithoutOrdersInput, SheetUncheckedCreateWithoutOrdersInput>
  }

  export type UserUpsertWithoutOrdersInput = {
    update: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrdersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type UserUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    forgotPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    forgotPasswordExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prblems?: ProblemUpdateManyWithoutUserNestedInput
    submissions?: SubmissionUpdateManyWithoutUserNestedInput
    problemSolved?: ProblemSolvedUpdateManyWithoutUserNestedInput
    playlists?: PlaylistUpdateManyWithoutUserNestedInput
    sheet?: SheetUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    forgotPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    forgotPasswordExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prblems?: ProblemUncheckedUpdateManyWithoutUserNestedInput
    submissions?: SubmissionUncheckedUpdateManyWithoutUserNestedInput
    problemSolved?: ProblemSolvedUncheckedUpdateManyWithoutUserNestedInput
    playlists?: PlaylistUncheckedUpdateManyWithoutUserNestedInput
    sheet?: SheetUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SheetUpsertWithoutOrdersInput = {
    update: XOR<SheetUpdateWithoutOrdersInput, SheetUncheckedUpdateWithoutOrdersInput>
    create: XOR<SheetCreateWithoutOrdersInput, SheetUncheckedCreateWithoutOrdersInput>
    where?: SheetWhereInput
  }

  export type SheetUpdateToOneWithWhereWithoutOrdersInput = {
    where?: SheetWhereInput
    data: XOR<SheetUpdateWithoutOrdersInput, SheetUncheckedUpdateWithoutOrdersInput>
  }

  export type SheetUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: ProblemInSheetUpdateManyWithoutSheetNestedInput
    user?: UserUpdateOneRequiredWithoutSheetNestedInput
  }

  export type SheetUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: ProblemInSheetUncheckedUpdateManyWithoutSheetNestedInput
  }

  export type ProblemCreateManyUserInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.Difficulty
    tags?: ProblemCreatetagsInput | string[]
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: string | null
    editorial?: string | null
    testcases: JsonNullValueInput | InputJsonValue
    codeSnippets: JsonNullValueInput | InputJsonValue
    referenceSolutions: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubmissionCreateManyUserInput = {
    id?: string
    problemId: string
    sourceCode: JsonNullValueInput | InputJsonValue
    language: string
    stdin?: string | null
    stdout?: string | null
    stderr?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProblemSolvedCreateManyUserInput = {
    id?: string
    problemId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlaylistCreateManyUserInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SheetCreateManyUserInput = {
    id?: string
    title: string
    company: string
    description?: string | null
    price?: number
    isPaid?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderCreateManyUserInput = {
    id?: string
    sheetId: string
    razorpayOrderId: string
    razorpayPaymentId?: string | null
    razorpaySignature?: string | null
    status: string
    amount: number
    createdAt?: Date | string
  }

  export type ProblemUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    tags?: ProblemUpdatetagsInput | string[]
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    testcases?: JsonNullValueInput | InputJsonValue
    codeSnippets?: JsonNullValueInput | InputJsonValue
    referenceSolutions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submission?: SubmissionUpdateManyWithoutProblemNestedInput
    solvedBy?: ProblemSolvedUpdateManyWithoutProblemNestedInput
    problemsPlaylist?: ProblemInPlaylistUpdateManyWithoutProblemNestedInput
    problemsSheet?: ProblemInSheetUpdateManyWithoutProblemNestedInput
  }

  export type ProblemUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    tags?: ProblemUpdatetagsInput | string[]
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    testcases?: JsonNullValueInput | InputJsonValue
    codeSnippets?: JsonNullValueInput | InputJsonValue
    referenceSolutions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submission?: SubmissionUncheckedUpdateManyWithoutProblemNestedInput
    solvedBy?: ProblemSolvedUncheckedUpdateManyWithoutProblemNestedInput
    problemsPlaylist?: ProblemInPlaylistUncheckedUpdateManyWithoutProblemNestedInput
    problemsSheet?: ProblemInSheetUncheckedUpdateManyWithoutProblemNestedInput
  }

  export type ProblemUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    tags?: ProblemUpdatetagsInput | string[]
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    testcases?: JsonNullValueInput | InputJsonValue
    codeSnippets?: JsonNullValueInput | InputJsonValue
    referenceSolutions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceCode?: JsonNullValueInput | InputJsonValue
    language?: StringFieldUpdateOperationsInput | string
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problem?: ProblemUpdateOneRequiredWithoutSubmissionNestedInput
    testCases?: TestCaseResultUpdateManyWithoutSubmissionNestedInput
  }

  export type SubmissionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    sourceCode?: JsonNullValueInput | InputJsonValue
    language?: StringFieldUpdateOperationsInput | string
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testCases?: TestCaseResultUncheckedUpdateManyWithoutSubmissionNestedInput
  }

  export type SubmissionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    sourceCode?: JsonNullValueInput | InputJsonValue
    language?: StringFieldUpdateOperationsInput | string
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemSolvedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problem?: ProblemUpdateOneRequiredWithoutSolvedByNestedInput
  }

  export type ProblemSolvedUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemSolvedUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaylistUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: ProblemInPlaylistUpdateManyWithoutPlaylistNestedInput
  }

  export type PlaylistUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: ProblemInPlaylistUncheckedUpdateManyWithoutPlaylistNestedInput
  }

  export type PlaylistUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SheetUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: ProblemInSheetUpdateManyWithoutSheetNestedInput
    orders?: OrderUpdateManyWithoutSheetNestedInput
  }

  export type SheetUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: ProblemInSheetUncheckedUpdateManyWithoutSheetNestedInput
    orders?: OrderUncheckedUpdateManyWithoutSheetNestedInput
  }

  export type SheetUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    razorpayOrderId?: StringFieldUpdateOperationsInput | string
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sheet?: SheetUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sheetId?: StringFieldUpdateOperationsInput | string
    razorpayOrderId?: StringFieldUpdateOperationsInput | string
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sheetId?: StringFieldUpdateOperationsInput | string
    razorpayOrderId?: StringFieldUpdateOperationsInput | string
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionCreateManyProblemInput = {
    id?: string
    userId: string
    sourceCode: JsonNullValueInput | InputJsonValue
    language: string
    stdin?: string | null
    stdout?: string | null
    stderr?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProblemSolvedCreateManyProblemInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProblemInPlaylistCreateManyProblemInput = {
    id?: string
    playlistId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProblemInSheetCreateManyProblemInput = {
    id?: string
    sheetId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubmissionUpdateWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceCode?: JsonNullValueInput | InputJsonValue
    language?: StringFieldUpdateOperationsInput | string
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSubmissionsNestedInput
    testCases?: TestCaseResultUpdateManyWithoutSubmissionNestedInput
  }

  export type SubmissionUncheckedUpdateWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    sourceCode?: JsonNullValueInput | InputJsonValue
    language?: StringFieldUpdateOperationsInput | string
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testCases?: TestCaseResultUncheckedUpdateManyWithoutSubmissionNestedInput
  }

  export type SubmissionUncheckedUpdateManyWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    sourceCode?: JsonNullValueInput | InputJsonValue
    language?: StringFieldUpdateOperationsInput | string
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemSolvedUpdateWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProblemSolvedNestedInput
  }

  export type ProblemSolvedUncheckedUpdateWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemSolvedUncheckedUpdateManyWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemInPlaylistUpdateWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playlist?: PlaylistUpdateOneRequiredWithoutProblemsNestedInput
  }

  export type ProblemInPlaylistUncheckedUpdateWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    playlistId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemInPlaylistUncheckedUpdateManyWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    playlistId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemInSheetUpdateWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sheet?: SheetUpdateOneRequiredWithoutProblemsNestedInput
  }

  export type ProblemInSheetUncheckedUpdateWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    sheetId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemInSheetUncheckedUpdateManyWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    sheetId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestCaseResultCreateManySubmissionInput = {
    id?: string
    testCase: number
    passed: boolean
    stdout?: string | null
    expected: string
    stderr?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TestCaseResultUpdateWithoutSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    testCase?: IntFieldUpdateOperationsInput | number
    passed?: BoolFieldUpdateOperationsInput | boolean
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    expected?: StringFieldUpdateOperationsInput | string
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestCaseResultUncheckedUpdateWithoutSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    testCase?: IntFieldUpdateOperationsInput | number
    passed?: BoolFieldUpdateOperationsInput | boolean
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    expected?: StringFieldUpdateOperationsInput | string
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestCaseResultUncheckedUpdateManyWithoutSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    testCase?: IntFieldUpdateOperationsInput | number
    passed?: BoolFieldUpdateOperationsInput | boolean
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    expected?: StringFieldUpdateOperationsInput | string
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemInPlaylistCreateManyPlaylistInput = {
    id?: string
    problemId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProblemInPlaylistUpdateWithoutPlaylistInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problem?: ProblemUpdateOneRequiredWithoutProblemsPlaylistNestedInput
  }

  export type ProblemInPlaylistUncheckedUpdateWithoutPlaylistInput = {
    id?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemInPlaylistUncheckedUpdateManyWithoutPlaylistInput = {
    id?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemInSheetCreateManySheetInput = {
    id?: string
    problemId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderCreateManySheetInput = {
    id?: string
    userId: string
    razorpayOrderId: string
    razorpayPaymentId?: string | null
    razorpaySignature?: string | null
    status: string
    amount: number
    createdAt?: Date | string
  }

  export type ProblemInSheetUpdateWithoutSheetInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problem?: ProblemUpdateOneRequiredWithoutProblemsSheetNestedInput
  }

  export type ProblemInSheetUncheckedUpdateWithoutSheetInput = {
    id?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemInSheetUncheckedUpdateManyWithoutSheetInput = {
    id?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUpdateWithoutSheetInput = {
    id?: StringFieldUpdateOperationsInput | string
    razorpayOrderId?: StringFieldUpdateOperationsInput | string
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateWithoutSheetInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    razorpayOrderId?: StringFieldUpdateOperationsInput | string
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyWithoutSheetInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    razorpayOrderId?: StringFieldUpdateOperationsInput | string
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}