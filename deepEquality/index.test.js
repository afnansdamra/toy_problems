/**
 * Write a function that, given two objects, returns whether or not the two
 * are deeply equivalent--meaning the structure of the two objects is the
 * same, and so is the structure of each of their corresponding descendants.
 *
 * Examples:
 *
 * isDeepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
 * isDeepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
 *
 * don't worry about handling cyclical object structures and the keys order.
 *
 */

 function isDeepEquals(obj1, obj2) {
	if(!obj1 || !obj2) return false

	const newObj1 = {};
	const newObj2 = {};

	Object.keys(obj1).sort().forEach((key) => newObj1[key] = obj1[key]);
	Object.keys(obj2).sort().forEach((key) => newObj2[key] = obj2[key]);

	return JSON.stringify(newObj1) === JSON.stringify(newObj2)
}


describe("Tests", () => {
	const mockObj = {
		a: 1,
		b: {
			c: 3
		}
	}
	const mockObj2 = {
		b: {
			c: 3
		},
		a: 1,
	}

  it('test isDeepEquals #case1', () => {
    const result = isDeepEquals(null, {});
    expect(result).toEqual(false);
  });

  it('test isDeepEquals #case2', () => {
    const result = isDeepEquals();
    expect(result).toEqual(false);
  });

	it("test isDeepEquals #case3", () => {
		const result = isDeepEquals(mockObj, mockObj2)
		expect(result).toEqual(true)
	})

  it('test isDeepEquals #case4', () => {
    const result = isDeepEquals(null, null);
    expect(result).toEqual(false);
  });

  it('test isDeepEquals #case5', () => {
    const result = isDeepEquals(mockObj, {...mockObj,
      b: {
        c: '3',
      },
    });
    expect(result).toEqual(false);
  });

  it('test isDeepEquals #case6', () => {
    const result = isDeepEquals(mockObj, {...mockObj,
      b: {
        c: 6,
      },
    });
    expect(result).toEqual(false);
  });
});
