initSidebarItems({"enum":[["OptionBool","The `OptionBool` type, a space-efficient Option<bool> replacement"]],"fn":[["none","Create a `None Optioned<T>`. Note that the type must be inferrible  from the context, or you'd need to call with `::<T>` where `T` is  the specific type."],["some","Create an `Optioned<T>` that is `some(t)`."],["wrap","Wrap a `T` into an `Optioned<T>`, regardless of its None-ness."]],"struct":[["IterBool",""],["Optioned","An `Option<T>`-like structure that takes only as much space as the enclosed value, at the cost of removing one particular `None` value from the value domain (see `Noned`)"],["OptionedIter",""]],"trait":[["Noned","A trait whose implementation for any type `T` allows the use of `Optioned<T>` where `T` is bound by both `Sized` and `Copy`."],["OptEq","Equality within Optioned"],["OptOrd","Ordering within Optioned"]]});