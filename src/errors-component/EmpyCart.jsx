import { ShoppingBag } from "lucide-react"

function EmptyCart() {
  return (
    <div className="flex items-center justify-center my-2 min-h-[400px] px-4 py-8 bg-background">
      <div className=" flex-col flex justify-center items-center">
        <ShoppingBag className="mx-auto h-16 w-16 text-muted-foreground" />
        <h2 className="mt-4 text-2xl font-semibold text-foreground">Your cart is empty</h2>
        <p className="mt-2 text-muted-foreground">
          Looks like you haven't added anything to your cart yet.
        </p>
      </div>
      {/* <Button asChild className="mt-8">
        <Link href="/products">Start Shopping</Link>
      </Button> */}
    </div>
  )


}

export default EmptyCart

