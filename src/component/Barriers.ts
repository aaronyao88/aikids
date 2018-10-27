class Barriers {
	public barrierList: Array<Barrier> = new Array<Barrier>();
	private barrier_id: number;    // 障碍ID

	public constructor(barrier_list) {
		this. barrier_id = 0;
		if(barrier_list)
		{
			barrier_list.forEach(element => {
				var barrier = new Barrier(element.type, element.barrier_id, element.pair_id);
				barrier.x = (element.x - 1) * 144;
				barrier.y = (element.y - 1) * 144;
				this.barrierList.push(barrier);
				this.barrier_id++;
			});
		}
		
		
	}

}