import { useItemStore } from '@/store/dataStore';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { InventoryItem } from '@/types/datatypes';

export function OverviewCards() {
  const inventory = useItemStore((state) => state.inventory);
  const totalProducts = inventory.length;
  const totalValue = () => {
    let c = 0;
    inventory.forEach((value: InventoryItem) => {
      c += value.price * value.quantity;
    });
    return c;
  }
  const totalUnit = () => {
    let c = 0;
    inventory.forEach((value: InventoryItem) => {
      c += value.quantity;
    });
    return c;
  }
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Total Stock Value</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl text-red-500 font-bold">฿{totalValue().toFixed(2)}</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Total Products</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl text-blue-500 font-bold">{totalProducts}</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Total Units in Stock</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl text-green-700 font-bold">{totalUnit().toFixed(2)}</div>
        </CardContent>
      </Card>
    </div>
  );
}
